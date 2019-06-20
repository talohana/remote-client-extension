import { ScreenshotService } from './../services/screenshot.service';
import * as moment from 'moment';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import { ConsoleLogsService } from '../services/console-logs.service';
import { Messages } from '../models/messages.model';
import { SendMessageService } from './../services/sendMessage.service';

document.getElementById('takeScreenshotButton').addEventListener('click', takeScreenshot);
document.getElementById('sendErrorsButton').addEventListener('click', sendErrors);
document.getElementById('sendMessageButton').addEventListener('click', sendMessage);
document.getElementById('recordFPSButton').addEventListener('click', recordFPS);

const screenshotService: ScreenshotService = new ScreenshotService();
const consoleLogsService: ConsoleLogsService = new ConsoleLogsService();
const sendMessageService: SendMessageService = new SendMessageService();

function takeScreenshot() {
	screenshotService.takeScreenshot();
}

function sendErrors() {
	consoleLogsService.sendLogsToServer();
}

function sendMessage() {
	sendMessageService.sendMessage();
}

function recordFPS() {}

console.log(moment().get('ms'));
