Executables: https://cs.chromium.org/chromium/src/chrome/common/safe_browsing/download_protection_util.cc?dr=CSs&g=0

All file types handling policy: https://cs.chromium.org/chromium/src/chrome/browser/resources/safe_browsing/download_file_types.asciipb?l=1736

## Download Protection: MPKG file not checked on Mac OS

Link: https://bugs.chromium.org/p/chromium/issues/detail?id=600908

## Download Protection: SPARSEBUNDLE and SPARSEIMAGE files not checked on Mac OS X

Link: https://bugs.chromium.org/p/chromium/issues/detail?id=600613

VERSION
Chrome Version: 49.0.2623.87 Official Build
Operating System: Mac OS X El Capitan, version 10.11.3

REPRODUCTION CASE
SPARSEBUNDLE and SPARSEIMAGE files are not checked by download protection on Mac OS. Problem is that you can take any DMG file and renamed it, and serve it that way. Mac OS will treat both the same. To replicate this issue, take any DMG file, stick it on a web server, and rename to an .SPARSEIMAGE or .SPARSEBUNDLE. Then download on Mac and double click. It will act the same way as a DMG.

We can try to provide a patch.

Same behavior as
https://bugs.chromium.org/p/chromium/issues/detail?id=596354 but found later on

CDR
DMGPART
DVDR
DART
DC42
DISKCOPY42
IMGPART
NDIF
UDIF

## IMG files are not checked on Mac OS

Link: https://bugs.chromium.org/p/chromium/issues/detail?id=596354

VERSION
Chrome Version: 49.0.2623.87 Official Build
Operating System: Mac OS X El Capitan, version 10.11.3

REPRODUCTION CASE
IMG files are not checked by download protection on Mac OS. Problem is that you can take any DMG file and renamed it as an IMG file and serve it that way. Mac OS will treat both the same. To replicate this issue, take any DMG file, stick it on a web server, and renamed to an IMG. Then download on Mac and double click. It will act the same way as a DMG

We will be providing a patch as well.

## Download Protection Bypass .html files can be modified to bypass Full Ping

Link: https://bugs.chromium.org/p/chromium/issues/detail?id=762702

VERSION
Chromium Version: 60.0.3112.113 (Developer Build) 64-bit
Operating System: Ubuntu 16.04.3 LTS 64-bit

REPRODUCTION CASE

a .html file Full Ping upon download can be bypassed by renaming the filename extension to either .xhtml or .xht , e.g. text.html -> test.xhtml.
Chromium does not check this filename extensions.
To work better the .html file should be coded according to xhtml style :
