import { ConfigService } from './../config/config.service';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import '../../node_modules/materialize-css/dist/js/materialize.min.js';

const snapshotInput = document.getElementById(
	'snapshotServer'
) as HTMLInputElement;

const submitButton = document.getElementById('submitButton');

const configService = new ConfigService();

configService.getConfig().then(config => {
	snapshotInput.value = config.screenshotServer;
});

submitButton.addEventListener('click', () => {});
