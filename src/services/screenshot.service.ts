import { ConfigService } from './../config/config.service';
import { Messages } from '../models/messages.model';
import Axios from 'axios';
export class ScreenshotService {
	private configService: ConfigService = new ConfigService();

	takeScreenshot() {
		chrome.runtime.sendMessage(
			{ type: Messages.TAKE_SCREENSHOT },
			({ dataUrl }) => this.sendDataURL(dataUrl)
		);
	}

	private async sendDataURL(dataUrl: string) {
		const { screenshotServer } = await this.configService.getConfig();
		Axios.post(screenshotServer, dataUrl);
	}
}
