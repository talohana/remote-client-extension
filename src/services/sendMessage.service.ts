import { TabsService } from './tabs.service';
import Axios from 'axios';
import { Config } from '../config/config';

export class SendMessageService {
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
			this.sendProblem((document.getElementById('description') as HTMLTextAreaElement).value);
			document.body.removeChild(myDialog);
		};

		nevermindButton.onclick = () => {
			document.body.removeChild(myDialog);
		};
	}

	private async sendProblem(description: string) {
		const hostUrl = await this.tabsService.getActiveTabHostUrl();

		Axios.post(`${hostUrl}${Config.sendMessageEndpoint}`, { description });
	}
}
