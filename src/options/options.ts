import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import '../../node_modules/materialize-css/dist/js/materialize.min.js';
import { Config } from '../config/config';

document.getElementById('screenshotEndpoint').addEventListener('input', onSnapshotServerInput);

const submitButton = document.getElementById('submitButton');

initializeFieldsWithCurrentConfig();

function initializeFieldsWithCurrentConfig() {
	(document.getElementById('screenshotEndpoint') as HTMLInputElement).value = Config.screenshotEndpoint;

	M.updateTextFields();
}

function onSnapshotServerInput(event: any) { }
