import * as moment from 'moment';
import { ConsoleLogsService } from '../services/console-logs.service';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';

document.getElementById('takeScreenshotButton').addEventListener('click', takeScreenshot);
document.getElementById('sendErrorsButton').addEventListener('click', sendErrors);
document.getElementById('sendMessageButton').addEventListener('click', sendMessage);
document.getElementById('recordFPSButton').addEventListener('click', recordFPS);

function takeScreenshot() {

}

function sendErrors() {
    new ConsoleLogsService().sendLogsToServer();
}

function sendMessage() {

}

function recordFPS() {

}


console.log(moment().get('ms'));
