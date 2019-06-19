import * as moment from 'moment';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import { ConsoleLogsService } from '../services/console-logs.service';
import { Messages } from '../models/messages.model';

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

function sendMessage() {}

function recordFPS() {}

console.log(moment().get('ms'));
