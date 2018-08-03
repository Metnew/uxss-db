# Chrome: known problems

---------------------------------------------

## Security: Omnibox drop target enables navigation to restricted URLs

> Reported by lcamtuf@google.com, Sep 17 2012

## Details

We started stripping javascript: from any text pasted or dragged into the address bar, but this happens after checking for other malicious patterns. Compare:

``` html

data:text/html,<a href='chrome://inducebrowsercrashforrealz'>drag me into the address bar first</a>, <a href='javascript:chrome://inducebrowsercrashforrealz'>try me next</a>

```

Not sure if this matters in practice, but seems like a simple fix, so creating a bug just in case.

Link: https://bugs.chromium.org/p/chromium/issues/detail?id=149877

---------------------------------------------

http://lcamtuf.coredump.cx/whack/ - cross-browser :(


---------------------------------------------

## Security: XSS by ServiceWorker for domains hosting arbitrary content, even in sandboxes

### VULNERABILITY DETAILS

ServiceWorker can turn previously unexploitable xss bugs into serious vulnerabilities :-(

As an example I've attached a simple script that installs a ServiceWorker on the Dropbox storage domain. This only uses an XSS on the *sandbox domain* of Dropbox, which was previously unexploitable. That ServiceWorker can then sniff traffic and steal the user's files as they are accessed.

Serving user files from a separate sandbox domain with no cookies used to be relatively safe, and many sites assume that it still is safe, to the point where they will serve both HTML and 'text/javascript' files from the same domain.

Ideally there would be some kind of opt-in mechanism for this; the available opt-out mechanism is hard to implement (rejecting 'Service-Worker: script' might be tricky with a caching CDN).

Link: https://bugs.chromium.org/p/chromium/issues/detail?id=439730