# uxss-db

## [UXSS](https://www.acunetix.com/blog/articles/universal-cross-site-scripting-uxss/) ([SOP](https://en.wikipedia.org/wiki/Same-origin_policy) BYPASS)

> UXSS is a type of attack that exploits client-side vulnerabilities in the browser or browser extensions in order to generate an XSS condition, and execute malicious code. When such vulnerabilities are found and exploited, the behavior of the browser is affected and its security features may be bypassed or disabled.

Some CVE ids were not found:
- **"0-$$$$"** - an issue with id *$$$$* in [google project zero tracker](https://bugs.chromium.org/p/project-zero/issues/list)
- **cr-$$$$** - an issue with id *$$$$* in [Chromium tracker](https://bugs.chromium.org/p/chromium/issues/list)

_Version field has "?" symbol, if version wasn't attached to a report_

### Webkit

| CVE/id    | title  | version | date  |
|---------- |------- | ------- | ----- |
| [CVE-2017-7089](https://github.com/Bo0oM/CVE-2017-7089) | | |
| [CVE-2017-7037](./webkit/CVE-2017-7037) | UXSS via JSObject::putInlineSlow and JSValue::putToPrimitive |  10? | Mar 10 2017 |
| [0-1197](./webkit/0-1197) | WebKit: UXSS via CachedFrameBase::restore | 10? | Mar 17 2017
| [CVE-2017-2528](./webkit/CVE-2017-2528) | UXSS: CachedFrame doesn't detach openers | 10? | Mar 10 2017 |
| [0-1163](./webkit/0-1163) | UXSS via Document::prepareForDestruction and CachedFrame | 10? | Mar 3 2017 |
| [CVE-2017-2510](./webkit/CVE-2017-2510) | UXSS: enqueuePageshowEvent and enqueuePopstateEvent don't enqueue, but dispatch | 10? | Feb 27 2017 |
| [CVE-2017-2508](./webkit/CVE-2017-2508) | UXSS via ContainerNode::parserInsertBefore | 10?  | Feb 24 2017 |
| [0-1134](./webkit/0-1134) | UXSS via ContainerNode::parserRemoveChild (2) | 10? | Feb 17 2017 |
| [0-1132](./webkit/0-1132) | UXSS: the patch of #1110 made another bug | 10? | Feb 16 2017 |
| [CVE-2017-2504](./webkit/CVE-2017-2504) | UXSS via Editor::Command::execute | 10.0.3(12602.4.8) | Feb 16 2017 |
| [CVE-2017-2493](./webkit/CVE-2017-2493) | UXSS through HTMLObjectElement::updateWidget | 10? | Feb 9 2017 |
| [CVE-2017-2480](./webkit/CVE-2017-2480) | UXSS via a synchronous page load | 10.0.3(12602.4.8) | Feb 9 2017 |
| [CVE-2017-2479](./webkit/CVE-2017-2479) | UXSS via a focus event and a link element | 10.0.3(12602.4.8) | Feb 9 2017 |
| [CVE-2017-2475](./webkit/CVE-2017-2475) | UXSS via ContainerNode::parserRemoveChild | 10.0.3(12602.4.8) | Feb 2 2017 |
| [0-1094](./webkit/0-1094) | UXSS via operationSpreadGeneric | Nighly 10.0.2(12602.3.12.0.1, r210957) | Jan 20 2017 |
| [0-1084](./webkit/0-1084) | UXSS via PrototypeMap::createEmptyStructure | Safari 10.0.2(12602.3.12.0.1) | Jan 17 2017
| [CVE-2017-2445](./webkit/CVE-2017-2445) | UXSS via disconnectSubframes | 10.0.2(12602.3.12.0.1) | Jan 9 2017 |
| [CVE-2017-2442](./webkit/CVE-2017-2442) | UXSS with JSCallbackData | 10.0.2(12602.3.12.0.1)? | Jan 3 2017
| [CVE-2017-2367](./webkit/CVE-2017-2367) | UXSS by accessing a named property from an unloaded window | 10.0.2(12602.3.12.0.1) | Dec 23 2016 |
| [CVE-2017-2365](./webkit/CVE-2017-2365) | UXSS via Frame::setDocument | 10.0.2(12602.3.12.0.1) | Dec 20 2016 |
| [CVE-2017-2364](./webkit/CVE-2017-2364) | UXSS via Frame::setDocument (1). | 10.0.2(12602.3.12.0.1) | Dec 20 2016 |
| [CVE-2017-2363](./webkit/CVE-2017-2363) | UXSS via FrameLoader::clear | 10.0.2(12602.3.12.0.1) | Dec 19 2016 |


### Chrome:
| CVE/id  | version/date  | reporter  |
|---------- |--------- | --------- |
| [CVE-2017-5007](./chrome/CVE-2017-5007) | | |
| [CVE-2016-5207](./chrome/CVE-2016-5207) | | |
| [CVE-2016-5204](./chrome/CVE-2016-5204) | | |
| [CVE-2016-1676](./chrome/CVE-2016-1676) | | |
| [CVE-2016-1674](./chrome/CVE-2016-1674) | | |
| [CVE-2016-1667](./chrome/CVE-2016-1667) | | |
| [CVE-2016-1631](./chrome/CVE-2016-1631) | | |
| [CVE-2015-6765](./chrome/CVE-2015-6765) | | |
| [cr-656274](./chrome/cr-656274) | | |
| [cr-594383](./chrome/cr-594383) | | |

### IE:
| CVE/id  | version/date  | reporter  |
|---------- |--------- | --------- |
| [CVE-2015-0072](https://github.com/dbellavista/uxss-poc), [1](https://github.com/wjessop/UXSS_PoC) | | |


### Articles:
- (RU) [Комикс о UXSS в Safari и Chrome](https://bo0om.ru/chrome-and-safari-uxss) - CVE-2017-5124 + CVE-2017-7089
- [Analysis on Internet Explorer's UXSS](https://blog.innerht.ml/ie-uxss/) - CVE-2015-0072

### Author
Vladimir Metnew <vladimirmetnew@gmail.com>

### LICENSE
MIT
