# Same Origin Policy Bypass via getSVGDocument() method.

> Reported by isaac.da...@gmail.com, Sep 9 2009

## Vulnerability

### What steps will reproduce the problem?

1. Load an SVG image in an object tag from a third party site. Set data as the uri of the svg file, type as "image/svg+xml"
2. Get a reference to the object and call the getSVGDocument() method.
3. This creates a reference to the objects contentDocument.
4. From here it is possible to read/set properties of the contentDocument of the third party, including cookies.

### What is the expected result?
Permission should be denied by same origin policy.

### What happens instead?
Ability to read/write cookie data, and view other data from a third party 
sites contentDocument.

## VERSION

Chrome Version: Google Chrome 2.0.172.43 (Official Build ) WebKit 530.5
User Agent: Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/530.5 (KHTML, like Gecko) Chrome/2.0.172.43 Safari/530.5

Link: https://bugs.chromium.org/p/chromium/issues/detail?id=21338