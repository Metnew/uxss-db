# window.external leaks global object + allows cross origin script access

> Reported by <mailto:esprehn@chromium.org>, Feb 2 2017

We use a [static local for the External object](<https://cs.chromium.org/chromium/src/third_party/WebKit/Source/core/frame/DOMWindow.cpp?type=cs&q=%22external()%22+file:webkit&l=116>)

But that both leaks the entire global object in the wrapper stored inside the External and also means that doing:

```js
// main page.
window.external.foo = function() {
	alert(1)
}
document.body.innerHTML = "<iframe src='https://example.com'>"
// inside example.com:
window.external.foo() // alert happens!
```

A static local `ScriptWrappable` is always wrong since it leaks memory and wrappers across frames.

Link: https://bugs.chromium.org/p/chromium/issues/detail?id=687844
