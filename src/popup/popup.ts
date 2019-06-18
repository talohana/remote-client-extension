import * as moment from 'moment';
import { ConsoleLogsService } from '../services/console-logs.service';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';

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
