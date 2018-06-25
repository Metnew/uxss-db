# Chrome OS exploit: WebAsm, Site Isolation, crosh, crash reporter, cryptohomed

> Reported by gzo...@gmail.com, Sep 18 2017

### [ WebAsm OOB ArrayBuffer ]

WebAsm instance builder reads imports from an attacker-controlled object in v8/src/wasm/wasm-module.cc:1625 ProcessImports(). Imports can be getters, which run while the instance is being built and is not in a consistent state. If the getter builds another instance for the same module, then the instances will share a WasmCompiledModule, but will have different ArrayBuffers for memory. Compiled module will reference one memory buffer. If the second memory grows, then the compiled module gets confused and relocates to OOB memory. For trunk, the code has moved to wasm/module-compiler.cc. Exploit in wasm_xpl.js.


### [ privesc to war-extensions with PageState ]

FrameNavigationEntry (FNE) holds a SiteInstance and PageState. If a FNE is navigated to, then SiteInstance determines the process. PageState can override the URL that the renderer navigates to. content/renderer/render_frame_impl.cc:6250 RFI::NavigateInternal():

  std::unique_ptr<HistoryEntry> entry =
    PageStateToHistoryEntry(request_params.page_state);
  ...
  item_for_history_navigation = entry->root();
  ...
  request = frame_->RequestFromHistoryItem(item_for_history_navigation,
                                           cache_policy);

PageState contains a URL that goes into the request. If the SiteInstance belongs to an extension and the url in PageState shouldn't go to extension process, then the transfer logic kicks in. But data: url is loaded fine. Here's the bug: a frame can overwrite the page_state of any other frame in the same WebContents. Using FrameHostMsg_DidCommitProvisionalLoad, which reaches NCI::RendererDidNavigate() in content/browser/frame_host/navigation_controller_impl.cc:946:

  FrameNavigationEntry* frame_entry =
      active_entry->GetFrameEntry(rfh->frame_tree_node());
  ...
  frame_entry->SetPageState(params.page_state);

FNE is looked up based on frame unique names. A compromised frame can lie about its unique name, and set it to the target extension frame using FrameHostMsg_DidChangeName. But GetFrameEntry only looks for frames in the same WebContents. So an attacker must iframe an extension. This is only possible for the web-accessible-resources. Exploit in index.html and sc.cc.


### [ war-extension to crosh with process limit ]

When chrome hits a certain limit of processes, it starts sharing them between renderers. It won't share between extensions and web origins. But it can share between arbitrary extensions. content/browser/renderer_host/render_process_host_impl.cc:3079 RPHI::GetProcessHostForSiteInstance():
```
  if (!render_process_host &&
      ShouldTryToUseExistingProcessHost(browser_context, site_url)) {
    render_process_host = GetExistingProcessHost(browser_context, site_url);
```
chrome/browser/extensions/chrome_content_browser_client_extensions_part.cc:398 IsSuitableHost():
```
  RenderProcessHostPrivilege privilege_required =
      GetPrivilegeRequiredByUrl(site_url, registry);
  return GetProcessPrivilege(process_host, process_map, registry) ==
         privilege_required;
```
This privilege is coarse grained, basically just PRIV_NORMAL vs PRIV_EXTENSION. The exploit iframes the Image Loader extension which iframes blobs urls to create a bunch of processes. Then it iframes the PDF extension to try and get into crosh extension. It retries until success, then exploits the PDF extension with page state and WebAsm to get control of the crosh extension renderer. Exploit in index.html, rendgen.js and sc.cc.


### [ crosh to chronos with awk injection ]

Crosh has access to a limited set of command line commands. network_diag has an awk command injection bug. platform2/crosh/network_diag:382 diag_arp():

  arp="$(${ARP} -an | awk '/('${ip}').*'${ifc}'$/ { print $4 }')"

Run that with ip=.)/{}BEGIN{system(sprintf("echo%c<base64>|base64%c-d|sh",32,32))}#

It uses sprintf %d 32 and base64 for spaces, because crosh splits arguments with spaces. But this awk is actually only reached when the ip belongs to the network of some interface: ip & netmask = network ip. The binary and is done in

do_netmask () {
  local -a ip=($(do_address_parts "$1"))
  local -a mask=($(do_address_parts "$2"))
  local -a ret
  for part in ${!ip[@]}; do
    ret+=("$((ip[part] & mask[part]))")

Which will break if ip[part] is not a number. Surprisingly, bash allows something like $(( a=5 )). And this modifies the variables outside the parenthesis! So craft an ip like this: 192.168.ip[3]=0,8.)/{}BEGIN... That's for the network address 192.168.8.0. It splits into 4 parts. 3rd part is ip[3]=0,8 so it overwrites the garbage in the 4th part to 0 and then evaluates to 8. And now 4th part successfully evaluates as 0! The exploit also uses network_diag to get the actual network address of wlan0. Code in crosher.js.


### [ chronos to root with crash reporter and /tmp symlink ]

The crash handler for non-chrome processes copies files to /tmp/crash_reporter/<crashed pid>/ as root. user_collector.cc:130:

  static const char* const kProcFiles[] = {
    "auxv",
    "cmdline",
    "environ",
    "maps",
    "status"
  };
  for (std::string proc_file : kProcFiles) {
    if (!base::CopyFile(process_path.Append(proc_file),
                        container_dir.Append(proc_file))) {

Symlink /tmp/crash_reporter/<getpid()>/environ to /proc/sys/kernel/core_pattern, then crash. And then crash again to launch the command in core_pattern. Actually, this won't work because of protected_symlinks. Even root gets permission denied for non-root symlinks in sticky directories. But surprisingly, this check only seems to apply for a symlink in the last component of a path. So symlink the pid directory to outside the sticky /tmp. And from there, symlink environ to core_pattern. Exploit in crasher.c. There is also a noexec bypass, using bash and dd. See drop/yexec and tools/yesexec.cc.


### [ persistence with cryptohomed stateful recovery ]

Cryptohomed has a feature called a stateful recovery. The file /mnt/stateful_partition/decrypt_stateful indicates a recovery request during boot. Cryptohomed takes a username and password hash from decrypt_stateful, decrypts the corresponding cryptohome and copies it to /mnt/stateful_partition/decrypted. And then it reboots. There is probably some sort of recovery USB stick, which asks the user for the password, writes it to decrypt_stateful, boots and later passes the decrypted files to the user. I don't know much about that.

In any case, the copying follows symlinks, so the exploit symlinks modprobe.d source file to /run/modprobe.d and runs a command as root with the uinput module.

There is a race between cryptohomed and uinput. uinput runs after login prompt is visible. With trickery, it's possible to reliably win the race. Chrome depends on the session manager, which reads /var/lib/whitelist/policy during initialization. Turn the policy file into a fifo. Reading of the fifo blocks until something writes to the fifo. Now, symlink then/unblock_session_manager to the fifo. The copying is done breadth first, so unblock_session_manager is written after modprobe.d.

Finally, cryptohomed would reboot, so make it block indefinitely on a then/then/block fifo. Once exploit gets root, it removes decrypt_stateful and restarts cryptohomed. Exploit in drop/persist.


#### VERSION

Chrome Version: 60.0.3112.114 stable
Operating System: Chrome OS 9592.94.0, Dell Chromebook 11, wolf


#### REPRODUCTION CASE

* unpack crosxpl2.targ.gz
* run `./webserver`
* navigate to `http://<ip>:8000/`
* wait until a tab opens with lamecalc
* reboot
* lamecalc should open again


Link: https://bugs.chromium.org/p/chromium/issues/detail?id=766253