import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import '../../node_modules/materialize-css/dist/js/materialize.min.js';
import { Config } from '../config/config';
import { ConfigService } from './../config/config.service';

document.getElementById('screenshotEndpoint').addEventListener('input', onSnapshotServerInput);

const submitButton = document.getElementById('submitButton');

const configService = new ConfigService();

configService.getConfig().then(initializeFieldsWithCurrentConfig);

function initializeFieldsWithCurrentConfig(config: Config) {
	(document.getElementById('screenshotEndpoint') as HTMLInputElement).value = config.screenshotEndpoint;
	M.updateTextFields();
}

function onSnapshotServerInput(event: any) {}
