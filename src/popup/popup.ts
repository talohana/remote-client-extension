import * as moment from 'moment';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import { ConsoleLogsService } from '../services/console-logs.service';
import { Messages } from '../models/messages.model';
import { Config } from '../config';
import { MessagingConfig } from '../messaging.config';

document.getElementById('takeScreenshotButton').addEventListener('click', takeScreenshot);
document.getElementById('sendErrorsButton').addEventListener('click', sendErrors);
document.getElementById('sendMessageButton').addEventListener('click', sendMessage);
document.getElementById('recordFPSButton').addEventListener('click', recordFPS);

function takeScreenshot() {
	chrome.runtime.sendMessage(
		{ type: Messages.TAKE_SCREENSHOT },
		({ dataUrl }) => {
			chrome.downloads.download({
				url: dataUrl,
				saveAs: true
			});
		}
	);
}

function sendErrors() {
	new ConsoleLogsService().sendLogsToServer();
}

function sendMessage() { }

function recordFPS() {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, { message: MessagingConfig.fpsRecordInit, fpsRecordTime: Config.fpsRecordTime }, console.log);
	});
}

chrome.runtime.onMessage.addListener(function (messageData, sender, sendResponse) {
	if (messageData.message === MessagingConfig.fpsRecordDone) {
		console.log(messageData.fpsRecord);
	}

	return Promise.resolve();
})
