import { TabsService } from './tabs.service';
import { Messages } from '../models/messages.model';

export class ScreenshotService {
	private tabsService: TabsService = new TabsService();

	takeScreenshot() {
		chrome.runtime.sendMessage({ type: Messages.TAKE_SCREENSHOT });
	}
}
