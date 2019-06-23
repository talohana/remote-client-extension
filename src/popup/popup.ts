import '../styles';
import { Config } from '../config/config';
import { Messages } from '../models/messages.model';
import { ConsoleLogsService } from '../services/console-logs.service';
import { TabsService } from '../services/tabs.service';
import { ScreenshotService } from './../services/screenshot.service';
import { SendMessageService } from './../services/sendMessage.service';

document.getElementById('takeScreenshotButton').addEventListener('click', takeScreenshot);
document.getElementById('sendErrorsButton').addEventListener('click', sendErrors);
document.getElementById('sendMessageButton').addEventListener('click', sendMessage);
document.getElementById('recordFPSButton').addEventListener('click', recordFPS);

const screenshotService: ScreenshotService = new ScreenshotService();
const consoleLogsService: ConsoleLogsService = new ConsoleLogsService();
const sendMessageService: SendMessageService = new SendMessageService();
const tabsService: TabsService = new TabsService();

function takeScreenshot() {
	screenshotService.takeScreenshot();
}

function sendErrors() {
	consoleLogsService.sendLogsToServer();
}

function sendMessage() {
	sendMessageService.sendMessage();
}

async function recordFPS() {
	chrome.tabs.sendMessage((await tabsService.getActiveTab()).id, { type: Messages.FPS_RECORD_INIT, fpsRecordTime: Config.fpsRecordTime }, console.log);
}

chrome.runtime.onMessage.addListener(function (messageData, sender, sendResponse) {
	if (messageData.type === Messages.FPS_RECORD_DONE) {
		console.log(messageData.fpsRecord);
	}

	return Promise.resolve();
})
