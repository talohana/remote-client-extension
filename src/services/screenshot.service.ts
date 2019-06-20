import { TabsService } from './tabs.service';
import { ConfigService } from './../config/config.service';
import { Messages } from '../models/messages.model';
import Axios from 'axios';
export class ScreenshotService {
	private configService: ConfigService = new ConfigService();
	private tabsService: TabsService = new TabsService();

	takeScreenshot() {
		chrome.runtime.sendMessage({ type: Messages.TAKE_SCREENSHOT }, ({ dataUrl }) => this.sendDataURL(dataUrl));
	}

	private async sendDataURL(dataUrl: string) {
		const hostUrl = await this.tabsService.getActiveTabHostUrl();
		const { screenshotEndpoint } = await this.configService.getConfig();
		Axios.post(`${hostUrl}${screenshotEndpoint}`, { dataUrl });
	}
}
