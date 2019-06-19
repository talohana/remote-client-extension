import { Messages } from './models/messages.model';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	switch (message.type) {
		case Messages.TAKE_SCREENSHOT: {
			chrome.tabs.captureVisibleTab(null, { format: 'png' }, function(dataUrl) {
				sendResponse({ dataUrl });
			});
		}
	}

	return true;
});
