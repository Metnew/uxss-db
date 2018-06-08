Included files:
 - broken.js: the main exploit
 - out.sol: the output of compile-it.py, for convenience
 - compile-it.py: generates out.sol
 - foofuse.py: FUSE filesystem

The main exploit is a JavaScript file for Frida ((http://www.frida.re) which
should be injected with a command like:

  frida -p `pgrep -f type=renderer | head -n 1` -l broken.js

It only supports two specific Chrome builds on OS X, although it should be
fairly evident how to modify it to work on other versions.

For the record, once again, the lack of a public repository of debug symbols
for official Chrome builds made development significantly more annoying; this
could be seen as a security by obscurity measure if not for the fact that debug
symbols are provided for Windows...

Although the Flash interface being exploited writes files into a path based on
an arbitrary base directory, as far as I could tell, it only writes files named
"settings.sol", and only in a specific format, a simple binary key-value store.
(It can also delete files, but that's less interesting.) The written data can
be controlled to some extent: it contains the "site domain", which can be
specified as any arbitrary string not containing \0, and if the file already
exists and is in the right format, any existing key/value pairs are preserved,
allowing nul bytes with limitations. But the file starts with a fairly large
header before getting to any user controllable data, preventing it from being
successfully parsed as most file types, and the header includes nul bytes,
blocking some others. Oh, and the way the plugin writes the file is to first
unlink it, then call fopen(filename, "wb"), which from an exploitation
perspective is so-so: if filename previously existed as a symlink, it won't
write to the symlink target (which could allow writing to an arbitrary
filename), but unlike the safe idiom (writing to a temporary file and
renaming), it does allow a symlink attack if a symlink is created at just the
right moment between the calls to unlink and fopen.

Even with these limits, there are probably at least some situations on all
desktop operating systems in which this can be exploited to execute arbitrary
code. On OS X, the job is made much easier by a little-used feature: by
default, autofs is mounted on /net, and when a path is accessed of the form
/net/<hostname>/<path>, it automatically connects to an NFS server on the
specified hostname and mounts whichever export corresponds to that path. With
this, not only can the attacker provide arbitrary prior data for the file, they
can mount the symlink attack easily, by intercepting the unlink and then
creating a symlink before processing any further NFS requests.

The easiest way to implement this I found was connecting a user-space NFS
server to a FUSE filesystem (the built-in kernel one on OS X won't read MacFUSE
filesystems for some reason). This is foofuse.py. broken.js hardcodes the path
as '/net/127.0.0.1/foo', but there is nothing preventing it from being a remote
host.

This still leaves the issue of finding a place to put a file containing
semi-uncontrollable binary gunk that will actually do something useful. One
possibility is overwriting an HTML file, and Chrome itself provides a possible
target in the form of unpacked extensions in the user data directory. However,
it didn't seem that any of the default extensions had permissions sufficient to
execute arbitrary code unsandboxed, so this would rely on the user having
something unusual installed. Another is overwriting a zip file, because not
only are zip files identified only by signatures at the end of the file (not
the beginning), there can be a certain amount of arbitrary data at the end as
well!

I would be surprised if there weren't a better (more universal) target
somewhere, but I decided to just rely on the Dropbox app being installed in
/Applications and owned by the current user (which is the case on my system at
least). In particular, I decided to overwrite:

  /Applications/Dropbox.app/Contents/Resources/lib/python2.7/site-packages.zip

which contains .pyo files (compiled Python modules). Then the next time the
user opens Dropbox, arbitrary code will run.

This quickly turned into a rather silly waste of time, at least in terms of
relevance to demonstrating exploitability, because Dropbox uses a modified
version of Python that reads modules in an obfuscated format. I was bored, so I
just reverse engineered it. I also figured out how to coax the key/value file
to look enough like a zip file for Python's rather forgiving zipimport module
to read it, which was made harder than it should be by the fact that the only
arbitrarily-sized data type supported in the format can't contain nul bytes (or
rather, they'll get chopped off when Flash writes the data back out). I figured
out a method to deflate (as in zlib) arbitrary data into a nul-safe string,
which took care of the file data within the zip file. But zipimport wants
certain bytes in the zip headers to be zero, and unlike everything else, it
doesn't support zip comments (the arbitrary data at the end mentioned before);
if it didn't ignore most of the header data, the job might be impossible.

But it appears to work, on my system at least.
