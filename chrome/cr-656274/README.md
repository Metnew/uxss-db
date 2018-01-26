# Cross-origin object leak via fetch
### Reported by pim...@live.nl, Oct 15 2016

VULNERABILITY DETAILS
The promise returned by `fetch.call(crossOriginWindow)` is created in the cross-origin context. Direct cross-origin scripting is not possible because cross-origin function constructors don't work anymore ( issue 541703 ). But the attacker can e.g. call other functions of the cross-origin page.

VERSION
Chrome Version: 56.0.2891.0 canary (64-bit). Does not reproduce in stable; the promise is generated in the correct context there. Possibly commit [1] might be the cause, but I'm not sure.
Operating System: Windows 10

REPRODUCTION CASE
See attachments. Save in the same directory, then open parent.html. The sandboxed child is able to call `Function.foo` of the parent page.

https://bugs.chromium.org/p/chromium/issues/detail?id=656274

> Next comment:

In fact, I found a way to bypass the function constructor restrictions. That is, UXSS is possible. The trick is to create and resolve a promise, and call the function constructor in the `then` callback:
```
  var parent_Promise = fetch.call(parent).constructor;
  var parent_Function = parent_Promise.constructor;
  new parent_Promise(function(resolve) {
    resolve();
  }).then(function() {
    var f = new parent_Function("document.body.style.backgroundColor = 'red';");
    f();
  });
```
