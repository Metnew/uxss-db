# [e10s] SOP bypass with the service worker and 30x redirect

## Steps to Reproduce

(1) Login to Facebook
(2) Launch https://mallory.csrf.jp/sw/index3.html
(3) Reload the page, you can see the message "The service worker is successfully set."
(4) Push the "Read Facebook" button in the page, then the profile page of Facebook is opened in a new window.
(5) Wait for 5 seconds, then an alert dialog is shown on the page and it contains DOM contents of Facebook opened in a new window

## Vulnerability

In detail, the page opened by step (2) is controlled by a service worker and the worker tries to fetch all of contents requested through the page.
When you push the "Read Facebook" button, then the following page is opened in a new window.
https://mallory.csrf.jp/sw/redirect.php?s=308&u=https://www.facebook.com/profile.php
This page is a simple redirector to the profile page of Facebook, www.facebook.com/profile.php, with 308 status code.
The important thing here is that the redirector page is also goverened by the same service worker as the page opened by (2).
Then you can see the location bar of the child page remains the attacker's domain, however, the profile page of Facebook is already loaded in the child window, see the screen capture I attached.
This means that the Facebook page is loaded as the attacker's origin, i.e., mallory.csrf.jp.
So the attacker can retrieve it's page contents from the parent window and steal the sensitive information in the Facebook, as step (5).

### Expected Behavior:

The attacker domain, mallory.csrf.jp, shouldn't read page contents of Facebook.

Link: https://bugzilla.mozilla.org/show_bug.cgi?id=1164397