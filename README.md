# uxss-db

**Inspired by [`js-vuln-db`](https://github.com/tunz/js-vuln-db)**

## [UXSS](https://www.acunetix.com/blog/articles/universal-cross-site-scripting-uxss/) ([SOP](https://en.wikipedia.org/wiki/Same-origin_policy) BYPASS)

> UXSS (Universal Cross-site Scripting) is a type of attack that exploits client-side vulnerabilities in the browser or browser extensions in order to generate an XSS condition, and execute malicious code. When such vulnerabilities are found and exploited, the behavior of the browser is affected and its security features may be bypassed or disabled.

Some CVE ids were not found:
- **"0-$$$$"** - an issue with id *$$$$* in [google project zero tracker](https://bugs.chromium.org/p/project-zero/issues/list)
- **cr-$$$$** - an issue with id *$$$$* in [Chromium tracker](https://bugs.chromium.org/p/chromium/issues/list)

_Version field has "?" symbol, if detailed version wasn't attached to a report_

### Webkit

| CVE/id                 | title  | version | date  |
|----------------------- |------- | ------- | ----- |
| [CVE-2017-7089](https://github.com/Bo0oM/CVE-2017-7089) | UXSS via `parent-tab://` | 10? | Sep 20, 2017
| [CVE-2017-7037](./webkit/CVE-2017-7037) | UXSS via `JSObject::putInlineSlow` and `JSValue::putToPrimitive` |  10? | Mar 10 2017 |
| [0-1197](./webkit/0-1197) | WebKit: UXSS via `CachedFrameBase::restore` | 10? | Mar 17 2017
| [CVE-2017-2528](./webkit/CVE-2017-2528) | UXSS: `CachedFrame` doesn't detach openers | 10? | Mar 10 2017 |
| [0-1163](./webkit/0-1163) | UXSS via `Document::prepareForDestruction` and CachedFrame | 10? | Mar 3 2017 |
| [CVE-2017-2510](./webkit/CVE-2017-2510) | UXSS: `enqueuePageshowEvent` and `enqueuePopstateEvent` don't enqueue, but dispatch | 10? | Feb 27 2017 |
| [CVE-2017-2508](./webkit/CVE-2017-2508) | UXSS via `ContainerNode::parserInsertBefore` | 10?  | Feb 24 2017 |
| [0-1134](./webkit/0-1134) | UXSS via `ContainerNode::parserRemoveChild` (2) | 10? | Feb 17 2017 |
| [0-1132](./webkit/0-1132) | UXSS: the patch of #1110 made another bug | 10 | Feb 16 2017 |
| [CVE-2017-2504](./webkit/CVE-2017-2504) | UXSS via `Editor::Command::execute` | 10.0.3 | Feb 16 2017 |
| [CVE-2017-2493](./webkit/CVE-2017-2493) | UXSS through `HTMLObjectElement::updateWidget` | 10.0.3 | Feb 9 2017 |
| [CVE-2017-2480](./webkit/CVE-2017-2480) | UXSS via a synchronous page load | 10.0.3 | Feb 9 2017 |
| [CVE-2017-2479](./webkit/CVE-2017-2479) | UXSS via a focus event and a link element | 10.0.3 | Feb 9 2017 |
| [CVE-2017-2475](./webkit/CVE-2017-2475) | UXSS via `ContainerNode::parserRemoveChild` | 10.0.3 | Feb 2 2017 |
| [0-1094](./webkit/0-1094) | UXSS via `operationSpreadGeneric` | 10.0.2 | Jan 20 2017 |
| [0-1084](./webkit/0-1084) | UXSS via `PrototypeMap::createEmptyStructure` | 10.0.2 | Jan 17 2017
| [CVE-2017-2445](./webkit/CVE-2017-2445) | UXSS via disconnectSubframes | 10.0.2 | Jan 9 2017 |
| [CVE-2017-2442](./webkit/CVE-2017-2442) | UXSS with `JSCallbackData` | 10.0.2 | Jan 3 2017
| [CVE-2017-2367](./webkit/CVE-2017-2367) | UXSS by accessing a named property from an unloaded window | 10.0.2 | Dec 23 2016 |
| [CVE-2017-2365](./webkit/CVE-2017-2365) | UXSS via `Frame::setDocument` | 10.0.2 | Dec 20 2016 |
| [CVE-2017-2364](./webkit/CVE-2017-2364) | UXSS via `Frame::setDocument` (1). | 10.0.2 | Dec 20 2016 |
| [CVE-2017-2363](./webkit/CVE-2017-2363) | UXSS via `FrameLoader::clear` | 10.0.2 | Dec 19 2016 |


### Chrome:
| CVE/id                                  | title             | version  | date |
|---------------------------------------- |------------------ |--------- |----- |
| [CVE-2017-5124](https://github.com/Bo0oM/CVE-2017-5124) | UXSS with MHTML  | 61 | Oct 20 2017 |
| [cr-687844](./chrome/cr-687844)         | window.external leaks global object + cross origin script access  | 57 | Feb 2 2017 |
| [CVE-2017-5007](./chrome/CVE-2017-5007) | UXSS through bypassing `ScopedPageSuspender` with closing windows | 55 | Dec 5 2016 |
| [cr-656274](./chrome/cr-656274)         | Cross-origin object leak via `fetch` | 56 (canary) | Oct 15 2016 |
| [cr-594383](./chrome/cr-594383)         | UXSS via window.open() via `file://` pages | 54 | Oct 15 2016 |
| [CVE-2016-5207](./chrome/CVE-2016-5207) | UXSS via fullscreen element updates | 54 | Oct 14 2016 |
| [CVE-2016-5204](./chrome/CVE-2016-5204) | UXSS by intercepting a UA shadow tree | 52 | Jul 24 2016 |
| [CVE-2016-1676](./chrome/CVE-2016-1676) | Persistent UXSS via `SchemaRegistry` | 50 | Apr 19 2016 |
| [CVE-2016-1667](./chrome/CVE-2016-1667) | UXSS through adopting image elements | 50 | Apr 21 2016 |
| [CVE-2016-1674](./chrome/CVE-2016-1674) | UXSS via the interception of `Binding` with `Object.prototype.create` | 49 | Mar 26 2016 |
| [CVE-2016-1673](./chrome/CVE-2016-1673) | UXSS using a `FrameNavigationDisabler` bypass | 49 | Mar 24 2016 |
| [cr-583445]('./chrome/cr-583445')       | UXSS in `DocumentLoader::createWriterFor` | 48 | Feb 2 2016 |
| [CVE-2016-1631](./chrome/CVE-2016-1631) | UXSS using Flash message loop | 47 | Dec 14 2015 |
| [CVE-2015-6770](./chrome/CVE-2015-6770) | UXSS using `document.adoptNode` | 45 | Oct 8 2015 |
| [CVE-2015-6769](./chrome/CVE-2015-6769) | UXSS via the `unload_event` module | 45 | Sep 22 2015 |
| [CVE-2015-6765](./chrome/CVE-2015-6765) | UXSS via `ContainerNode::parserInsertBefore` | 44 | Aug 11 2015 |
| [CVE-2015-1268](./chrome/CVE-2015-1268) | UXSS using IDBKeyRange static methods | 43 | May 31 2015 |
| [CVE-2014-1747](./chrome/CVE-2014-1701) | UXSS via local MHTML file | 35 | Dec 25 2013 |
| [CVE-2014-1701](./chrome/CVE-2014-1701) | UXSS via `dispatchEvent` on iframes | 32 | Feb 11 2014 |
| [CVE-2011-2856](./chrome/CVE-2011-2856) | Arbitrary cross-origin bypass using `__defineGetter__` prototype override | 15 | Aug 18 2011 |
| [CVE-2011-3243](./chrome/CVE-2011-3243) | Universal XSS using `contentWindow.eval` | 12 | May 24 2011 |
| [cr-37383]('./chrome/cr-37383')         | `javascript:` url with a leading NULL byte can bypass cross origin protection. | ? | Mar 4 2010 |


### IE:
| CVE/id  | version/date  | reporter  |
|---------- |--------- | --------- |
| [CVE-2015-0072](https://github.com/dbellavista/uxss-poc), [alternative PoC](https://github.com/wjessop/UXSS_PoC) | | |


### Articles:
- (RU) [Комикс о UXSS в Safari и Chrome](https://bo0om.ru/chrome-and-safari-uxss) - CVE-2017-5124 + CVE-2017-7089
- [Analysis on Internet Explorer's UXSS](https://blog.innerht.ml/ie-uxss/) - CVE-2015-0072
- [Universal XSS via Evernote WebClipper](https://blog.xpnsec.com/evernote-webclipper-uxss/)

### Author
Vladimir Metnew <vladimirmetnew@gmail.com>

### LICENSE
MIT
