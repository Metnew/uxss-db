# uxss-db 🔪

> Star the repo, if it was useful for you ⭐️.
> Any help is highly appreciated, 🙏 check [TODO](#todo)!

- [uxss-db 🔪](#uxss-db)
  - [Intro](#intro)
  - [Webkit](#webkit)
  - [Chrome](#chrome)
  - [IE/Edge](#ie-edge)
  - [Articles](#articles)
  - [Whitepapers](#whitepapers)
  - [Browser hacking guides and design docs](#browser-hacking-guides-and-design-docs)
    - [Firefox](#firefox)
    - [Tor](#tor)
    - [Brave](#brave)
    - [Chromium](#chromium)
    - [Webkit](#webkit)
  - [Specs](#specs)
  - [Bounties](#bounties)
  - [Misc](#misc)
  - [Scripts](#scripts)
  - [Author](#author)
  - [LICENSE](#license)
  - [Notes](#notes)
  - [TODO](#todo)

**Inspired by [`js-vuln-db`](https://github.com/tunz/js-vuln-db)**
> You can extract `js-vuln-db` CVEs to `.html/.js` files using [Scripts](#scripts)

> Demo: https://uxss-db.now.sh

## Intro

- [What is UXSS?](https://www.acunetix.com/blog/articles/universal-cross-site-scripting-uxss/)
- [What is SOP?](https://en.wikipedia.org/wiki/Same-origin_policy)
- [What is CORS?](https://developer.mozilla.org/ru/docs/Web/HTTP/CORS)

Some CVE ids were not found:

* **"0-$$$$"** - an issue with id _$$$$_ in [google project zero tracker](https://bugs.chromium.org/p/project-zero/issues/list)
* **cr-$$$$** - an issue with id _$$$$_ in [Chromium tracker](https://bugs.chromium.org/p/chromium/issues/list)
* **some-bug** - vuln don't have CVE or CVE is unknown

_Version field has "?" symbol, if detailed version wasn't attached to the report_

## Webkit

| CVE/id                                                  | title                                                                               | version | date         |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------- | ------------ |
| [CVE-2017-7089](https://github.com/Bo0oM/CVE-2017-7089) | UXSS via `parent-tab://`                                                            | 10?     | Sep 20, 2017 |
| [CVE-2017-7037](./webkit/CVE-2017-7037)                 | UXSS via `JSObject::putInlineSlow` and `JSValue::putToPrimitive`                    | 10?     | Mar 10 2017  |
| [0-1197](./webkit/0-1197)                               | WebKit: UXSS via `CachedFrameBase::restore`                                         | 10?     | Mar 17 2017  |
| [CVE-2017-2528](./webkit/CVE-2017-2528)                 | UXSS: `CachedFrame` doesn't detach openers                                          | 10?     | Mar 10 2017  |
| [0-1163](./webkit/0-1163)                               | UXSS via `Document::prepareForDestruction` and CachedFrame                          | 10?     | Mar 3 2017   |
| [CVE-2017-2510](./webkit/CVE-2017-2510)                 | UXSS: `enqueuePageshowEvent` and `enqueuePopstateEvent` don't enqueue, but dispatch | 10?     | Feb 27 2017  |
| [CVE-2017-2508](./webkit/CVE-2017-2508)                 | UXSS via `ContainerNode::parserInsertBefore`                                        | 10?     | Feb 24 2017  |
| [0-1134](./webkit/0-1134)                               | UXSS via `ContainerNode::parserRemoveChild` (2)                                     | 10?     | Feb 17 2017  |
| [0-1132](./webkit/0-1132)                               | UXSS: the patch of #1110 made another bug                                           | 10      | Feb 16 2017  |
| [CVE-2017-2504](./webkit/CVE-2017-2504)                 | UXSS via `Editor::Command::execute`                                                 | 10.0.3  | Feb 16 2017  |
| [CVE-2017-2493](./webkit/CVE-2017-2493)                 | UXSS through `HTMLObjectElement::updateWidget`                                      | 10.0.3  | Feb 9 2017   |
| [CVE-2017-2480](./webkit/CVE-2017-2480)                 | UXSS via a synchronous page load                                                    | 10.0.3  | Feb 9 2017   |
| [CVE-2017-2479](./webkit/CVE-2017-2479)                 | UXSS via a focus event and a link element                                           | 10.0.3  | Feb 9 2017   |
| [CVE-2017-2475](./webkit/CVE-2017-2475)                 | UXSS via `ContainerNode::parserRemoveChild`                                         | 10.0.3  | Feb 2 2017   |
| [CVE-2017-2468](./webkit/CVE-2017-2468)                 | Use-After-Free via `Document::adoptNode`                                            | 10.0.3  | Jan 23 2017  |
| [0-1094](./webkit/0-1094)                               | UXSS via `operationSpreadGeneric`                                                   | 10.0.2  | Jan 20 2017  |
| [0-1084](./webkit/0-1084)                               | UXSS via `PrototypeMap::createEmptyStructure`                                       | 10.0.2  | Jan 17 2017  |
| [CVE-2017-2445](./webkit/CVE-2017-2445)                 | UXSS via `disconnectSubframes`                                                      | 10.0.2  | Jan 9 2017   |
| [CVE-2017-2442](./webkit/CVE-2017-2442)                 | UXSS with `JSCallbackData`                                                          | 10.0.2  | Jan 3 2017   |
| [CVE-2017-2367](./webkit/CVE-2017-2367)                 | UXSS by accessing a named property from an unloaded window                          | 10.0.2  | Dec 23 2016  |
| [CVE-2017-2365](./webkit/CVE-2017-2365)                 | UXSS via `Frame::setDocument`                                                       | 10.0.2  | Dec 20 2016  |
| [CVE-2017-2364](./webkit/CVE-2017-2364)                 | UXSS via `Frame::setDocument` (1).                                                  | 10.0.2  | Dec 20 2016  |
| [CVE-2017-2363](./webkit/CVE-2017-2363)                 | UXSS via `FrameLoader::clear`                                                       | 10.0.2  | Dec 19 2016  |

## Chrome

| CVE/id                                                  | title                                                                          | version     | date        |
| ------------------------------------------------------- | ------------------------------------------------------------------------------ | ----------- | ----------- |
| [CVE-2017-5124](https://github.com/Bo0oM/CVE-2017-5124) | UXSS with MHTML                                                                | 61          | Oct 20 2017 |
| [cr-687844](./chrome/cr-687844)                         | `window.external` leaks global object + cross origin script access             | 57          | Feb 2 2017  |
| [CVE-2017-5007](./chrome/CVE-2017-5007)                 | UXSS through bypassing `ScopedPageSuspender` with closing windows              | 55          | Dec 5 2016  |
| [cr-656274](./chrome/cr-656274)                         | Cross-origin object leak via `fetch`                                           | 56 (canary) | Oct 15 2016 |
| [cr-594383](./chrome/cr-594383)                         | UXSS via `window.open()` via `file://` pages                                   | 54          | Oct 15 2016 |
| [CVE-2016-5207](./chrome/CVE-2016-5207)                 | UXSS via fullscreen element updates                                            | 54          | Oct 14 2016 |
| [CVE-2016-5204](./chrome/CVE-2016-5204)                 | UXSS by intercepting a UA shadow tree                                          | 52          | Jul 24 2016 |
| [CVE-2016-1676](./chrome/CVE-2016-1676)                 | Persistent UXSS via `SchemaRegistry`                                           | 50          | Apr 19 2016 |
| [CVE-2016-1667](./chrome/CVE-2016-1667)                 | UXSS through adopting image elements                                           | 50          | Apr 21 2016 |
| [CVE-2016-1674](./chrome/CVE-2016-1674)                 | UXSS via the interception of `Binding` with `Object.prototype.create`          | 49          | Mar 26 2016 |
| [CVE-2016-1673](./chrome/CVE-2016-1673)                 | UXSS using a `FrameNavigationDisabler` bypass                                  | 49          | Mar 24 2016 |
| [cr-583445]('./chrome/cr-583445')                       | UXSS in `DocumentLoader::createWriterFor`                                      | 48          | Feb 2 2016  |
| [CVE-2016-1631](./chrome/CVE-2016-1631)                 | UXSS using Flash message loop                                                  | 47          | Dec 14 2015 |
| [CVE-2015-6770](./chrome/CVE-2015-6770)                 | UXSS using `document.adoptNode`                                                | 45          | Oct 8 2015  |
| [CVE-2015-6769](./chrome/CVE-2015-6769)                 | UXSS via the `unload_event` module                                             | 45          | Sep 22 2015 |
| [CVE-2015-6765](./chrome/CVE-2015-6765)                 | UXSS via `ContainerNode::parserInsertBefore`                                   | 44          | Aug 11 2015 |
| [CVE-2015-1268](./chrome/CVE-2015-1268)                 | UXSS using IDBKeyRange static methods                                          | 43          | May 31 2015 |
| [CVE-2014-1747](./chrome/CVE-2014-1747)                 | UXSS via local MHTML files                                                     | 35          | Dec 25 2013 |
| [CVE-2014-1701](./chrome/CVE-2014-1701)                 | UXSS via `dispatchEvent` on iframes                                            | 32          | Feb 11 2014 |
| [CVE-2011-2856](./chrome/CVE-2011-2856)                 | Arbitrary cross-origin bypass using `__defineGetter__` prototype override      | 15          | Aug 18 2011 |
| [CVE-2011-3243](./chrome/CVE-2011-3243)                 | Universal XSS using `contentWindow.eval`                                       | 12          | May 24 2011 |
| [CVE-2011-1438](./chrome/CVE-2011-1438)                 | bypass SOP with `blob:`                                                        | 11          | Mar 2 2011  |
| [cr-74372]('./chrome/cr-74372')                         | `chrome://blob-internals/` XSS                                                 | 11          | Feb 28 2011 |
| [cr-37383]('./chrome/cr-37383')                         | `javascript:` url with a leading NULL byte can bypass cross origin protection. | ?           | Mar 4 2010  |

## IE/Edge

| CVE/id                                                                                                           | version/date | reporter |
| ---------------------------------------------------------------------------------------------------------------- | ------------ | -------- |
| [CVE-2015-0072](https://github.com/dbellavista/uxss-poc), [alternative PoC](https://github.com/wjessop/UXSS_PoC) |              |          |

## Articles

* (RU) [Комикс о UXSS в Safari и Chrome](https://bo0om.ru/chrome-and-safari-uxss) - CVE-2017-5124 + CVE-2017-7089
* [Analysis on Internet Explorer's UXSS](https://blog.innerht.ml/ie-uxss/) - CVE-2015-0072
* [Universal XSS via Evernote WebClipper](https://blog.xpnsec.com/evernote-webclipper-uxss/)
* [Mobile Browsers Security: iOS](https://www.syscan360.org/slides/2014_EN_MobileBrowsersSecurityiOS_LukaszPilorzPawelWylecial.pdf)
* [SOP bypass / UXSS – Stealing Credentials Pretty Fast (Edge)](https://www.brokenbrowser.com/sop-bypass-uxss-stealing-credentials-pretty-fast/) - May 10, 2017
* [Grabbing data from Inputs and Textareas (Edge/IE)](https://www.brokenbrowser.com/grabdatafrominput/) - Aug 28, 2016

## Whitepapers

* [X41: Browser Security White Paper](https://browser-security.x41-dsec.de/X41-Browser-Security-White-Paper.pdf) + [website](https://www.x41-dsec.de/security/report/whitepaper/2017/09/18/whitepaper-x41-browser-security/) + [repo](https://github.com/x41sec/browser-security-whitepaper-2017)
* [The Definitive Guide to Same-origin Policy](https://www.netsparker.com/whitepaper-same-origin-policy/)
* [On the Security of the SOP-DOM Using HTML and JavaScript Code](http://your-sop.com/more-stuff/subsequent-work/On_the_Security_of_the_SOP-DOM_Using_HTML_and_JavaScript_Code.pdf)
* [Same-Origin Policy: Evaluation in Modern Browsers](https://www.usenix.org/system/files/conference/usenixsecurity17/sec17-schwenk.pdf) + [slides](https://www.usenix.org/sites/default/files/conference/protected-files/usenixsecurity17_slides_marcus_niemietz.pdf) + [talk](https://youtu.be/-dz_V0fqUnw) + [your-sop.com](http://your-sop.com)
* [Google Browser Security Handbook](https://ru.scribd.com/document/135631086/Google-Browser-Security-Handbook)

## Browser hacking guides and design docs

### Firefox

* [7 Tips for Fuzzing Firefox More Effectively](https://blog.mozilla.org/security/2012/06/20/7-tips-for-fuzzing-firefox-more-effectively/)

### Tor

* [The Tor Browser Hacking Guide](https://trac.torproject.org/projects/tor/wiki/doc/TorBrowser/Hacking)
* [The Design and Implementation of the Tor Browser [DRAFT]](https://www.torproject.org/projects/torbrowser/design/)

### Brave

* [Brave browser repo](https://github.com/brave/browser-laptop)
* [Component Structure](https://github.com/brave/browser-laptop/blob/master/docs/componentStructure.md)
* [Directory Structure](https://github.com/brave/browser-laptop/blob/master/docs/directoryStructure.md)
* [State](https://github.com/brave/browser-laptop/blob/master/docs/state.md) - similar to Redux state concept, but just an ImmutableJS object
* [How to work with crashes](https://github.com/brave/browser-laptop/wiki/Crashes)

### Chromium

* [How Chromium Displays Web Pages](https://www.chromium.org/developers/design-documents/displaying-a-web-page-in-chrome)
* [Chromium: Multi-process Architecture](https://www.chromium.org/developers/design-documents/multi-process-architecture)
* [Plz Navigate: Browser-side navigation in Chrome](https://docs.google.com/document/d/1cSW8fpJIUnibQKU8TMwLE5VxYZPh4u4LNu_wtkok8UE/edit?pref=2&pli=1#)
* [PlzNavigate: Navigation failure](https://docs.google.com/document/d/1AD1gkOO9yTuNwnNptczdlMgktoMdl0LssDbv1ECx5Co/edit#heading=h.8e8hcr1fxzjg)
* [PlzNavigate: Speculative renderer creation](https://docs.google.com/document/d/1d3NhCFK79imXBO_S-qN16XYLS1zC5hkvL7nQclxnKP8/edit#heading=h.vno6gjwj078r)
* [Site Isolation Design Document](https://www.chromium.org/developers/design-documents/site-isolation)
* [Site Isolation Summit - Chromium Changes](https://docs.google.com/presentation/d/1e25K7BW3etNDm1-lkMltMcCcRDeVwLibBcbACRhqZ1k/edit#slide=id.g6ddda684b_09)
* [Site Isolation Summit 2015](https://docs.google.com/presentation/d/10HTTK4dsxO5p6FcpEOq8EkuV4yiBx2n6dBki8cqDWyo/edit#slide=id.g6ddc3db7f_050)
* [Site Isolation Summit - Blink Changes](https://docs.google.com/presentation/d/11nrXiuXBTC72E5l_MUtu2eJN6rcW9PtBewDOPPTk9Bc/edit#slide=id.g6dded9be5_073)
* [Threading and Tasks in Chrome](https://chromium.googlesource.com/chromium/src/+/master/docs/threading_and_tasks.md)
* [Important Abstractions and Data Structures](https://www.chromium.org/developers/coding-style/important-abstractions-and-data-structures)

### Webkit

* [Core WebKit Classes](https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/DisplayWebContent/Concepts/WebKitDesign.html)

## Specs

* [W3C Suborigins [DRAFT]](https://w3c.github.io/webappsec-suborigins/)
* [ECMA 262](https://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf)

## Bounties

> Submit a bounty program via PR, if you know any

* [Zerodium](https://zerodium.com/program.html)
* [Tor](https://hackerone.com/torproject)
* [Chrome](https://www.google.com/about/appsecurity/chrome-rewards/)
* [Brave](https://hackerone.com/brave)

## Misc

* [NodeFuzz](https://code.google.com/archive/p/ouspg/wikis/NodeFuzz.wiki) - web browser fuzzer
* [Muon](https://github.com/brave/muon) - Build browsers and browser like applications with HTML, CSS, and JavaScript
* https://ios.browsr-tests.com - list of SOP bypasses in iOS
* https://github.com/rafaybaloch/SOP-Bypass-Mini-Test-Suite - list of SOP bypasses (includes some CVEs from this repo)

## Scripts

```bash
  # Export `js-vuln-db` repo's CVEs to html
  bash ./scripts/js-vuln-db-to-format.sh html
  # Export `js-vuln-db` repo's CVEs to js
  bash ./scripts/js-vuln-db-to-format.sh js
```

## Author

Vladimir Metnew <mailto:vladimirmetnew@gmail.com>

## LICENSE

MIT

## Notes

How to start hacking? You need:

* C++, memory management and memory corruptions background
* Compiled Webkit/Chromium/FF sources with ASAN (for memory bugs)
* Source code review + knowledge of previous vulnerabilities
* Fuzzer for memory-related bugs.
* Read some posts to understand which attack surface isn't covered enough.

## TODO

* RESOLVE THESE LINKS AND START USING ISSUES!
* Introduce unified way to trigger exploit, where it's possible: `window.onclick` / `<button id="X">Click me</button>`
* Add "Firefox" table in `README.md`
* Find CVE or chrome tracker id for `chrome/input-type-color`
* Add these bugs:
  * https://www.brokenbrowser.com/revealing-the-content-of-the-address-bar-ie/
  * https://www.brokenbrowser.com/sop-bypass-uxss-tweeting-like-charles-darwin/
  * https://www.brokenbrowser.com/sop-bypass-abusing-read-protocol/
  * https://www.brokenbrowser.com/microsoft-edge-detecting-installed-extensions/
  * https://www.brokenbrowser.com/free-ticket-to-the-intranet-zone/
  * https://www.brokenbrowser.com/uxss-ie-domainless-world/
  * https://www.brokenbrowser.com/bypass-the-patch-to-keep-spoofing-the-address-bar-with-the-malware-warning/
  * https://www.brokenbrowser.com/zombie-alert/
  * https://www.brokenbrowser.com/uxss-ie-htmlfile/
  * https://www.brokenbrowser.com/uxss-edge-domainless-world/
  * https://www.brokenbrowser.com/abusing-of-protocols/
  * https://www.brokenbrowser.com/loading-insecure-content-in-secure-pages/
  * https://www.brokenbrowser.com/detecting-local-files-to-evade-analysts/
  * https://www.brokenbrowser.com/workers-sop-bypass-importscripts-and-basehref/
  * https://www.brokenbrowser.com/detecting-apps-mimetype-malware/
  * https://www.brokenbrowser.com/referer-spoofing-defeating-xss-filter/
  * https://www.brokenbrowser.com/css-history-leak/
  * https://www.brokenbrowser.com/grabdatafrominput/
  * https://blog.jeremiahgrossman.com/2006/08/i-know-where-youve-been.html
  * [Pwnfest 2016 meta bug](https://bugs.chromium.org/p/chromium/issues/detail?id=664551&can=1&q=Type%3D%22Bug-Security%22%20Security_Severity%3DCritical%20&sort=-modified&colspec=ID%20Pri%20M%20Stars%20ReleaseBlock%20Component%20Status%20Owner%20Summary%20OS%20Modified)
  * [Pwn2own meta bug](https://bugs.chromium.org/p/chromium/issues/detail?id=659474)
  * [Chrome OS exploit: WebAsm, Site Isolation, crosh, crash reporter, cryptohomed](https://bugs.chromium.org/p/chromium/issues/detail?id=766253)
  * [Full chain exploit + sandbox escape: Array.concat -> extension install -> download exec](https://bugs.chromium.org/p/chromium/issues/detail?id=386988)
  * [Pwn2Own: content: scheme allows cross-origin info leaks](https://bugs.chromium.org/p/chromium/issues/detail?id=659489)
  * [Use-after free in leveldb](https://bugs.chromium.org/p/chromium/issues/detail?id=88944)
  * [Security: UaF in MidiHost round 2 (JS -> Browser code execution)](https://bugs.chromium.org/p/chromium/issues/detail?id=576383)
  * https://lr3800.github.io/CVE-2017-17692/Demo.html - https://github.com/lr3800/CVE-2017-17692
  * https://xisigr.com/x/cve-2015-3755/
  * https://bugs.chromium.org/p/chromium/issues/detail?id=419383
  * https://bugs.chromium.org/p/chromium/issues/detail?id=380885 - https://www.christian-schneider.net/ChromeSopBypassWithSvg.html
  * https://github.com/mpgn/ByP-SOP
  * https://blog.doyensec.com/2017/08/03/electron-framework-security.html
  * http://blog.intothesymmetry.com/2015/08/apple-safari-sop-bypass-cve-2015-3753.html
  * Download Protection Bypass: additional Microsoft Visio file-formats should get a Full Ping
    https://bugs.chromium.org/p/chromium/issues/detail?id=771469
  * Download Protection Bypass .html files can be modified to bypass Full Ping: https://bugs.chromium.org/p/chromium/issues/detail?id=762702
  * https://cs.chromium.org/chromium/src/chrome/browser/resources/safe_browsing/download_file_types.asciipb
  * https://www.cracking.com.ar/demos/edgespoof/3/
  * http://unsafe.cracking.com.ar/demos/edgedatametadata/bing.html
  * Table of allowed/disallowed browser hacks: like [top-level navigation to data:uri](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/)
  * [CVE-2016-9079: Use-after-free in SVG Animation](https://bugzilla.mozilla.org/show_bug.cgi?id=1321066)
  * https://bugs.chromium.org/p/chromium/issues/detail?id=666246
  * https://bugs.chromium.org/p/chromium/issues/detail?id=671328
  * https://trac.torproject.org/projects/tor/ticket/20772
  * http://www.cracking.com.ar/demos/workerleak/
  * http://www.cracking.com.ar/demos/xmldom/
  * http://unsafe.cracking.com.ar/demos/sandboxedge/
  * https://www.cracking.com.ar/demos/sop-ax-htmlfile/injectiframexdom.html !!
  * https://bugs.chromium.org/p/chromium/issues/detail?id=21338
  * http://browser-shredders.blogspot.com/
  * http://browser-shredders.blogspot.com/2014/06/cve-not-yet-assigned-opera-coast-ssl.html
  * [Bypassing the Same Origin Policy - The Browser Hacker&rsquo;s Handbook (2014)](http://apprize.info/security/browser/5.html)
  * [438085 - Security: SOP bypass via DNS-Rebind (including PoC) - chromium - Monorail](https://bugs.chromium.org/p/chromium/issues/detail?id=438085)
  * [Cookie same origin policy](https://crypto.stanford.edu/cs142/lectures/10-cookie-security.pdf)
  * [Chrome XSS Bypass - Brute XSS](https://brutelogic.com.br/blog/chrome-xss-bypass/)
  * [same origin policy problems](http://www.securitylearn.net/tag/same-origin-policy-problems/)
  * [demonic_browsers.pdf](https://research.aurainfosec.io/assets/demonic_browsers.pdf)
  * [lcamtuf's blog: Announcing ref_fuzz, a 2 year old fuzzer](https://lcamtuf.blogspot.com/2010/06/announcing-reffuzz-2yo-fuzzer.html)
  * [lcamtuf's blog: Yeah, about that address bar thing...](https://lcamtuf.blogspot.com/2010/06/yeah-about-that-address-bar-thing.html)
  * [Multiple Browsers Fake url folder & file Same origin Spoof](http://lostmon.blogspot.com/2009/08/multiple-browsers-fake-url-folder-file.html)
  * [lcamtuf's blog: The curse of inverse strokejacking](https://lcamtuf.blogspot.com/2010/06/curse-of-inverse-strokejacking.html)
  * [lcamtuf.coredump.cx/webkit-focus/](http://lcamtuf.coredump.cx/webkit-focus/)
  * [lcamtuf's blog: Safari: a tale of betrayal and revenge](https://lcamtuf.blogspot.com/2010/06/safari-tale-of-betrayal-and-revenge.html)
  * [Full Disclosure: ...because you can't get enough of clickjacking](http://seclists.org/fulldisclosure/2010/Mar/232)
  * [JSON hijacking for the modern web | Blog](https://portswigger.net/blog/json-hijacking-for-the-modern-web)
  * [portswigger-labs.net/jsproxy/edge_proxy_undefined_variable_read/](http://portswigger-labs.net/jsproxy/edge_proxy_undefined_variable_read/)
  * [portswigger-labs.net/jsproxy/edge_proxy_undefined_variable_read/index2.html](http://portswigger-labs.net/jsproxy/edge_proxy_undefined_variable_read/index2.html)
  * [portswigger-labs.net/utf-16be/edge_steal_json_data_with_proxy/index2.php](http://portswigger-labs.net/utf-16be/edge_steal_json_data_with_proxy/index2.php)
  * [portswigger-labs.net/utf-16be/chrome_steal_json_data_with_proxy/index2.html](http://portswigger-labs.net/utf-16be/chrome_steal_json_data_with_proxy/index2.html)
  * [portswigger-labs.net/utf-16be/safari_steal_json_data_with_proxy/](http://portswigger-labs.net/utf-16be/safari_steal_json_data_with_proxy/)
  * [portswigger-labs.net/utf-16be/without_proxies/](http://portswigger-labs.net/utf-16be/without_proxies/)
  * [Test](http://portswigger-labs.net/utf-16be/csp/index.php?x=%3Cscript%20src=%22index.php?x=%2509%2500%253D%2500a%2500l%2500e%2500r%2500t%2500(%25001%2500)%2500%253B%2500%252F%2500%252F%22%20charset=%22UTF-16BE%22%3E%3C/script%3E)
  * [portswigger-labs.net/edge_steal_multiple_undefined_variables/](http://portswigger-labs.net/edge_steal_multiple_undefined_variables/)
  * [Bypass Same Origin Policy](http://qnimate.com/same-origin-policy-in-nutshell/)
  * [175281 &ndash; Sandbox flags do not support document.domain control](https://bugs.webkit.org/show_bug.cgi?id=175281)
  * [277084 - Disallow setting document.domain in sandboxed iframes - chromium - Monorail](https://bugs.chromium.org/p/chromium/issues/detail?id=277084)
  * [ChromeDOP.pdf](http://www.comp.nus.edu.sg/~tsunami/papers/ChromeDOP.pdf)[147625 - Security: UXSS/SOP bypass with document.write (Chrome on iOS) - chromium - Monorail](https://bugs.chromium.org/p/chromium/issues/detail?id=147625)
  * [2014_EN_MobileBrowsersSecurityiOS_LukaszPilorzPawelWylecial.key](https://www.syscan.org/slides/2014_EN_MobileBrowsersSecurityiOS_LukaszPilorzPawelWylecial.pdf)
  * [Continued Adventures with iOS UIWebViews](https://labs.mwrinfosecurity.com/blog/continued-adventures-with-ios-uiwebviews/)
  * [Continued Adventures with iOS UIWebViews](https://labs.mwrinfosecurity.com/blog/continued-adventures-with-ios-uiwebviews/)
  * [WebView addJavascriptInterface Remote Code Execution](https://labs.mwrinfosecurity.com/blog/webview-addjavascriptinterface-remote-code-execution/)
  * [GUILogicSecurity.pdf](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/GUILogicSecurity.pdf)
  * [326118 - Security: chrome: address bar spoofing in Chrome for iOS - chromium - Monorail](https://bugs.chromium.org/p/chromium/issues/detail?id=326118)
  * [16/migrated_attachments/2f74d79b701 (1024×768)](https://00e9e64bac24fb818ac3e26824a54ec249cc6bc2d9dcdb8e24-apidata.googleusercontent.com/download/storage/v1/b/monorail-prod.appspot.com/o/16%2Fmigrated_attachments%2F2f74d79b701?qk=AD5uMEv_AbL1NwlVZmEp-VB_OpUCHkO6po7mt4FhIfBvYpYY3B6lC37QKYbcPKyFrymrjUgyP5qkGcWXykFTsZ13rzcx-dRTQvinM2yygkiF4Wpbnu8xpa32OI2r8kdeDm0UkMB-z58_TGsq2ixFMRaclXEIxuqN7t0jOSq7-t8xi9GNnh_EMDcraSSrzf3ZwTTasSl-7GKAfz9f1Ltj4WLOFqSA88RuTcjz-95DbWZU5BnY9BtW6_j6jLcClGuULzcAKgBcWWG4q49nmXEwy65-ADwgFp3uvzOHVxN604MyOPMK2RtbFcx619ZFUswtIlf2q-1c28PQdNb6Wz2n5oOaHBQNxzACb5OyZCbeijrBdtVIP-Nz8-nCc0Gl4tQkd6YgwGE7e3QwUOL2yjFQXDMN9WOEG-4JsTzA-DoixbDvmAfd2i7SgrPjBxw3s_ih_OeYbtvKfACwcist0pJAmsiIRyeaWTF1oJC8PYAzIoBE-tQJxjXdSx7HKpdKFCZIbR6zZMymOGm7Eyz3paIBAk_Y3Umz3CD_y6ZP_RinsGvelvUCM-KGY7RVJnZUWalAWD_mkSjOlrYz5DGGVy5tgiMidMKIbEt9blCiTukxx1rDu6W0eUFdnikXhchOABKbX0Ws6R9wyDLeEEwwleHnGSMTvINrGpxDNWVvv4cNZ69pVDJ-7t_y7IJLJ84uTDxAL8RwVxB4mpX59EfJlaqlaC8K2V7ZuCetbbUFi5i11XjxGh6v_ESenGAeBBusPm34GDGjtL9UACN2)
  * [326125 - Security: Prompt spoofing in Chrome for iOS - chromium - Monorail](https://bugs.chromium.org/p/chromium/issues/detail?id=326125)
  * [Full Disclosure: ...because you can't get enough of clickjacking](http://seclists.org/fulldisclosure/2010/Mar/232)
  * [CVE-2011-3426 - Поиск в Google](https://www.google.com.ua/search?q=CVE-2011-3426&oq=CVE-2011-3426&aqs=chrome..69i57.139j0j7&sourceid=chrome&ie=UTF-8)
  * [javascript - Ways to circumvent the same-origin policy - Stack Overflow](https://stackoverflow.com/questions/3076414/ways-to-circumvent-the-same-origin-policy)
  * [Apple Safari SOP bypass (CVE-2015-3753)](http://blog.intothesymmetry.com/2015/08/apple-safari-sop-bypass-cve-2015-3753.html)
  * [Launching applications using custom browser protocols &ndash; Shotgun Support](https://support.shotgunsoftware.com/hc/en-us/articles/219031308-Launching-applications-using-custom-browser-protocols)
  * [348640 - Ignore external protocol requests from frames without user action - chromium - Monorail](https://bugs.chromium.org/p/chromium/issues/detail?id=348640)
  * format webkit/CVE-2018-4204/README.md
  * format chrome/CVE-2013-6642/README.md
  * format webkit/CVE-2013-6893
  * missing exploit for `webkit/CVE-2013-7197`

Find CVEs from [domato](https://github.com/google/domato) repo:

> Apple Safari: CVE-2017-2369, CVE-2017-2373, CVE-2017-2362, CVE-2017-2454, CVE-2017-2455, CVE-2017-2459, CVE-2017-2460, CVE-2017-2466, CVE-2017-2471, CVE-2017-2476, CVE-2017-7039, CVE-2017-7040, CVE-2017-7041, CVE-2017-7042, CVE-2017-7043, CVE-2017-7046, CVE-2017-7048, CVE-2017-7049
> Microsoft Internet Explorer 11: CVE-2017-0037, CVE-2017-0059, CVE-2017-0202, CVE-2017-8594
> Microsoft Edge: CVE-2017-0037, CVE-2017-8496, CVE-2017-8652, CVE-2017-8644
> Mozilla Firefox: CVE-2017-5404, CVE-2017-5447, CVE-2017-5465
> https://www.syscan.org/slides/2014_EN_MobileBrowsersSecurityiOS_LukaszPilorzPawelWylecial.pdf