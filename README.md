# uxss-db 🔪

> Star the repo, if it was useful for you ⭐️.
> Any help is highly appreciated, check [TODO](#todo)!

* [uxss-db](#uxss-db)
  * [UXSS (SOP BYPASS)](#uxss-sop-bypass)
  * [Webkit](#webkit)
  * [Chrome](#chrome)
  * [IE/Edge](#ie-edge)
  * [Articles](#articles)
  * [Whitepapers](#whitepapers)
  * [Browser hacking guides](#browser-hacking-guides)
  * [Specs](#specs)
  * [Bounties](#bounties)
    * [Author](#author)
    * [LICENSE](#license)
      * [Notes](#notes)
  * [TODO](#todo)

**Inspired by [`js-vuln-db`](https://github.com/tunz/js-vuln-db)**

<!-- > Demo: [https://uxss-db.now.sh](Hosted on "zeit/now") -->

## Intro

[What is UXSS?](https://www.acunetix.com/blog/articles/universal-cross-site-scripting-uxss/)

[What is SOP?](https://en.wikipedia.org/wiki/Same-origin_policy)

Some CVE ids were not found:

* **"0-$$$$"** - an issue with id _$$$$_ in [google project zero tracker](https://bugs.chromium.org/p/project-zero/issues/list)
* **cr-$$$$** - an issue with id _$$$$_ in [Chromium tracker](https://bugs.chromium.org/p/chromium/issues/list)

_Version field has "?" symbol, if detailed version wasn't attached to a report_

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

## Browser hacking guides

* [The Tor Browser Hacking Guide](https://trac.torproject.org/projects/tor/wiki/doc/TorBrowser/Hacking)
* [The Design and Implementation of the Tor Browser [DRAFT]](https://www.torproject.org/projects/torbrowser/design/)

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

[NodeFuzz](https://code.google.com/archive/p/ouspg/wikis/NodeFuzz.wiki) - web browser fuzzer

### Author

Vladimir Metnew <mailto:vladimirmetnew@gmail.com>

### LICENSE

MIT

#### Notes

How to start hacking? You need:

* Knowledge of C++, memory management and memory corruptions
* Compiled Webkit/Chromium/FF sources with ASAN
* Source code review + previous vulnerabilities
* Fuzzer possibly won't help you find UXSS. Unless it's not UXSS-aimed fuzzer.

## TODO

<!-- * Add "Chromodo" table in README.md -->

* Add "Firefox" table in README.md
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
  * https://github.com/rafaybaloch/SOP-Bypass-Mini-Test-Suite - looks like an aggregation of already added CVEs
