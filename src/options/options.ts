import { ConfigService } from './../config/config.service';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import '../../node_modules/materialize-css/dist/js/materialize.min.js';
import { Config } from '../config/config';

document.getElementById('snapshotServer').addEventListener('input', onSnapshotServerInput);

const submitButton = document.getElementById('submitButton');

const configService = new ConfigService();

configService.getConfig().then(initializeFieldsWithCurrentConfig);

function initializeFieldsWithCurrentConfig(config: Config) {
	(document.getElementById('snapshotServer') as HTMLInputElement).value = config.screenshotEndpoint;
}

function onSnapshotServerInput(event: any) {}
