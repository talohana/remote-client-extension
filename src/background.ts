import { Messages } from './models/messages.model';
import { MessagingConfig } from './messaging.config';

chrome.runtime.onMessage.addListener((messageData, sender, sendResponse) => {
	switch (messageData.type) {
		case Messages.TAKE_SCREENSHOT: {
			chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (dataUrl) {
				sendResponse({ dataUrl });
			});
		}
	}

	if (messageData.message === MessagingConfig.fpsRecordDone) {
		console.log(messageData.fpsRecord);
	}

	return Promise.resolve();
});
