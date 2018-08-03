# Security: Omnibox drop target enables navigation to restricted URLs

> Reported by lcamtuf@google.com, Sep 17 2012

## Details

We started stripping javascript: from any text pasted or dragged into the address bar, but this happens after checking for other malicious patterns. Compare:

``` html

data:text/html,<a href='chrome://inducebrowsercrashforrealz'>drag me into the address bar first</a>, <a href='javascript:chrome://inducebrowsercrashforrealz'>try me next</a>

```

Not sure if this matters in practice, but seems like a simple fix, so creating a bug just in case.

Link: https://bugs.chromium.org/p/chromium/issues/detail?id=149877


http://lcamtuf.coredump.cx/whack/ - cross-browser :(