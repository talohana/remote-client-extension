export class TabsService {
	getActiveTab(): Promise<chrome.tabs.Tab> {
		return new Promise((resolve, reject) => {
			chrome.tabs.query({ active: true }, ([activeTab]) => {
				resolve(activeTab);
			});
		});
	}

	async getActiveTabHostname(): Promise<string> {
		const { url } = await this.getActiveTab();
		return new URL(url).hostname;
	}
}
