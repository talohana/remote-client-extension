import { Messages } from './models/messages.model';
import { TabsService } from './services/tabs.service';
import { Config } from './config/config';
import Axios from 'axios';

const tabsService: TabsService = new TabsService();

chrome.runtime.onMessage.addListener(async (messageData, sender, sendResponse) => {
	switch (messageData.type) {
		case Messages.TAKE_SCREENSHOT: {
			chrome.tabs.captureVisibleTab({ format: 'png' }, sendDataURLToWebhook);

			break;
		}
		case Messages.FPS_RECORD_DONE: {
			sendFPSRecocrdToWebhook(messageData.fpsRecord);
		}
	}

	return true;
});

async function sendDataURLToWebhook(dataUrl: string, ) {
	const hostUrl = await tabsService.getActiveTabHostUrl();

	Axios.post(`${hostUrl}${Config.screenshotEndpoint}`, { dataUrl });
}

async function sendFPSRecocrdToWebhook(fpsRecord) {
	const hostUrl = await tabsService.getActiveTabHostUrl();

	Axios.post(`${hostUrl}${Config.fpsRecordEndpoint}`, { fpsRecord });
}