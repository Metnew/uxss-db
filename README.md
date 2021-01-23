# uxss-db 🔪

> Star the repo, if it was useful for you ⭐️.

> Any help is highly appreciated, 🙏 check [TODO](#todo)!

- [uxss-db 🔪](#uxss-db-%F0%9F%94%AA)
  - [Intro](#intro)
  - [Webkit](#webkit)
  - [Chromium](#chromium)
  - [IE/Edge](#ieedge)
  - [Articles](#articles)
  - [Whitepapers](#whitepapers)
  - [Browser hacking guides and design docs](#browser-hacking-guides-and-design-docs)
    - [Firefox](#firefox)
    - [Tor](#tor)
    - [Brave](#brave)
    - [Chromium](#chromium)
    - [Webkit](#webkit)
    - [Electron](#electron)
  - [Specs](#specs)
  - [Bounties](#bounties)
  - [Misc](#misc)
  - [Scripts](#scripts)
  - [Author](#author)
  - [LICENSE](#license)
  - [TODO](#todo)

**Inspired by [`js-vuln-db`](https://github.com/tunz/js-vuln-db)**

For **memory** bugs, exploits and other: check [`awesome-browser-exploit`](https://github.com/Escapingbug/awesome-browser-exploit)

> You can extract `js-vuln-db` CVEs to `.html/.js` files using [Scripts](#scripts)

## Intro

* [What is UXSS?](https://www.acunetix.com/blog/articles/universal-cross-site-scripting-uxss/)
* [What is SOP?](https://en.wikipedia.org/wiki/Same-origin_policy)
* [What is CORS?](https://developer.mozilla.org/ru/docs/Web/HTTP/CORS)

Some CVE ids were not found:

* **0-$$$$** - the issue with id _$$$$_ in [google project zero tracker](https://bugs.chromium.org/p/project-zero/issues/list)
* **cr-$$$$** - the issue with id _$$$$_ in [Chromium tracker](https://bugs.chromium.org/p/chromium/issues/list)
* **some-bug** - the vulnerability doesn't have CVE or CVE is unknown

_Version field has "?" symbol, if a version wasn't attached to the report_

**NOTE: Many CVEs aren't listed in the tables below!** 

*Check `/other` folder = unsorted/unknown/duplicated CVEs and vulnerabilities for less popular browsers*

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

## Chromium

| CVE/id                                                  | title                                                                          | version     | date        |
| ------------------------------------------------------- | ------------------------------------------------------------------------------ | ----------- | ----------- |
| [CVE-2018-6128](./chrome/CVE-2018-6128)                 | UXSS via URL parsing bug                                                          | 66          | May 9 2018  |
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
* [Exploring and Exploiting iOS Web Browsers](http://bofh.nikhef.nl/events/HitB/hitb-2014-amsterdam/praatjes/D2T2-Exploring-and-Exploiting-iOS-Web-Browsers.pdf) - Łukasz Pilorz, Marek Zmysłowski, Hack In The Box, Amsterdam 2014
* https://leucosite.com blog by [@Qab](https://twitter.com/Qab)
* [BrokenBrowser](https://www.brokenbrowser.com) blog:
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

## Whitepapers

* [X41: Browser Security White Paper](https://browser-security.x41-dsec.de/X41-Browser-Security-White-Paper.pdf) + [website](https://www.x41-dsec.de/security/report/whitepaper/2017/09/18/whitepaper-x41-browser-security/) + [repo](https://github.com/x41sec/browser-security-whitepaper-2017)
* [The Definitive Guide to Same-origin Policy](https://www.netsparker.com/whitepaper-same-origin-policy/)
* [On the Security of the SOP-DOM Using HTML and JavaScript Code](http://your-sop.com/more-stuff/subsequent-work/On_the_Security_of_the_SOP-DOM_Using_HTML_and_JavaScript_Code.pdf)
* [Same-Origin Policy: Evaluation in Modern Browsers](https://www.usenix.org/system/files/conference/usenixsecurity17/sec17-schwenk.pdf) + [slides](https://www.usenix.org/sites/default/files/conference/protected-files/usenixsecurity17_slides_marcus_niemietz.pdf) + [talk](https://youtu.be/-dz_V0fqUnw) + [your-sop.com](http://your-sop.com)
* [Google Browser Security Handbook](https://ru.scribd.com/document/135631086/Google-Browser-Security-Handbook)
* [A Security Study of Chrome’s Process-based Sandboxing](http://www.comp.nus.edu.sg/~tsunami/papers/ChromeDOP.pdf)
* [A Systematic Approach to Uncover Security Flaws in GUI Logic](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/GUILogicSecurity.pdf)
* [JSON hijacking](https://www.owasp.org/images/6/6a/OWASPLondon20161124_JSON_Hijacking_Gareth_Heyes.pdf)
* [Bypassing the Same Origin Policy - The Browser Hacker&rsquo;s Handbook (2014)](http://apprize.info/security/browser/5.html)

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
* [Site Isolation Design Document](https://www.chromium.org/developers/design-documents/site-isolation)
* [Threading and Tasks in Chrome](https://chromium.googlesource.com/chromium/src/+/master/docs/threading_and_tasks.md)
* [Important Abstractions and Data Structures](https://www.chromium.org/developers/coding-style/important-abstractions-and-data-structures)

### Webkit

* [Core WebKit Classes](https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/DisplayWebContent/Concepts/WebKitDesign.html)
* [Webkit docs on developer.apple.com](https://developer.apple.com/documentation/webkit)

### Electron

* [Modern Alchemy: Turning XSS into RCE](https://blog.doyensec.com/2017/08/03/electron-framework-security.html)
* [Electron Security Checklist ](https://www.blackhat.com/docs/us-17/thursday/us-17-Carettoni-Electronegativity-A-Study-Of-Electron-Security-wp.pdf)


## Specs

* [W3C Suborigins [DRAFT]](https://w3c.github.io/webappsec-suborigins/)
* [W3C Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
* [ECMA 262](https://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf)

## Bounties

* [Zerodium](https://zerodium.com/program.html)
* [Tor](https://hackerone.com/torproject)
* [Chrome](https://www.google.com/about/appsecurity/chrome-rewards/)
* [Brave](https://hackerone.com/brave)
* [SSD](https://www.beyondsecurity.com/ssd.html)
* [MS Edge](https://technet.microsoft.com/en-us/mt761990.aspx)

## Misc

* [NodeFuzz](https://code.google.com/archive/p/ouspg/wikis/NodeFuzz.wiki) - web browser fuzzer
* [brave/Muon](https://github.com/brave/muon) - Build browsers and browser like applications with HTML, CSS, and JavaScript (part of the Brave's bug bounty)
* https://ios.browsr-tests.com - list of SOP bypasses in iOS
* https://github.com/rafaybaloch/SOP-Bypass-Mini-Test-Suite - list of SOP bypasses
* [ref_fuzz](https://lcamtuf.blogspot.com/2010/06/announcing-reffuzz-2yo-fuzzer.html) fuzzer - [source code](http://lcamtuf.coredump.cx/ref_fuzz5.html)
* [javascript - Ways to circumvent the same-origin policy - Stack Overflow](https://stackoverflow.com/questions/3076414/ways-to-circumvent-the-same-origin-policy) - document.domain, window.postMessage, CORS, reverse proxy( + jsonp)
* Slides about cookie security - [Cookie same origin policy](https://crypto.stanford.edu/cs142/lectures/10-cookie-security.pdf)
* [PortSwigger/hackability](https://github.com/PortSwigger/hackability) - "Devtools" for browser security. (useful for less known browsers)


## Scripts

```bash
  # Export `js-vuln-db` repo CVEs to html
  bash ./scripts/js-vuln-db-to-format.sh html
  # Export `js-vuln-db` repo CVEs to js
  bash ./scripts/js-vuln-db-to-format.sh js
```

## Author

Vladimir Metnew <mailto:vladimirmetnew@gmail.com>

## LICENSE

MIT

## TODO

* Add these bugs:
  * [Pwn2Own: content: scheme allows cross-origin info leaks](https://bugs.chromium.org/p/chromium/issues/detail?id=659489)
  * [Use-after free in leveldb](https://bugs.chromium.org/p/chromium/issues/detail?id=88944)
  * [Security: UaF in MidiHost round 2 (JS -> Browser code execution)](https://bugs.chromium.org/p/chromium/issues/detail?id=576383)
  * https://bugs.chromium.org/p/chromium/issues/detail?id=419383
  * https://github.com/mpgn/ByP-SOP
  * http://unsafe.cracking.com.ar/demos/edgedatametadata/bing.html
  * https://bugs.chromium.org/p/chromium/issues/detail?id=666246
  * http://www.cracking.com.ar/demos/workerleak/
  * http://www.cracking.com.ar/demos/xmldom/
  * http://unsafe.cracking.com.ar/demos/sandboxedge/
  * https://www.cracking.com.ar/demos/sop-ax-htmlfile/injectiframexdom.html
  * [438085 - Security: SOP bypass via DNS-Rebind (including PoC) - chromium - Monorail](https://bugs.chromium.org/p/chromium/issues/detail?id=438085)
  * [demonic_browsers.pdf](https://research.aurainfosec.io/assets/demonic_browsers.pdf)
  * [JSON hijacking for the modern web | Blog](https://portswigger.net/blog/json-hijacking-for-the-modern-web)
  * [Pwnfest 2016 meta bug](https://bugs.chromium.org/p/chromium/issues/detail?id=664551)
  * https://bugs.chromium.org/p/chromium/issues/detail?id=682020
  * https://blog.jeremiahgrossman.com/2006/08/i-know-where-youve-been.html - that web 1.0 thing
