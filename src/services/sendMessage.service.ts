import { ConfigService } from './../config/config.service';
import { TabsService } from './tabs.service';
import Axios from 'axios';

export class SendMessageService {
	private configService: ConfigService = new ConfigService();
	private tabsService: TabsService = new TabsService();

	sendMessage() {
		let messageBox = document.createElement('form');
		messageBox.id = 'problemDescription';

		let title = document.createElement('label');
		title.innerHTML = 'Describe your problem';

		let bugDescription = document.createElement('textarea');
		bugDescription.setAttribute('placeholder', 'Describe here...');
		bugDescription.id = 'description';

		let okButton = document.createElement('button');
		okButton.innerText = 'Ok';
		okButton.className = 'btn ok right';
		let nevermindButton = document.createElement('button');
		nevermindButton.className = 'btn nevermind right';
		nevermindButton.innerText = 'Nevermind';

		messageBox.appendChild(title);
		messageBox.appendChild(bugDescription);
		messageBox.appendChild(nevermindButton);
		messageBox.appendChild(okButton);

		let myDialog = document.createElement('dialog');
		myDialog.className = 'dialog-box';
		myDialog.appendChild(messageBox);
		document.body.appendChild(myDialog);
		myDialog.showModal();
		okButton.onclick = () => {
			let i = (document.getElementById('description') as HTMLTextAreaElement).value;
			({ i }) => this.sendProblem(i);
			document.body.removeChild(myDialog);
		};
		nevermindButton.onclick = () => {
			document.body.removeChild(myDialog);
		};
	}

	private async sendProblem(description: string) {
		const hostname = await this.tabsService.getActiveTabHostname();
		const { sendMessageEndpoint } = await this.configService.getConfig();
		//Axios.post(`${hostname}${sendMessageEndpoint}`, { description });
	}
}
