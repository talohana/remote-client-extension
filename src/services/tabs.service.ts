export class TabsService {
	getActiveTab(): Promise<chrome.tabs.Tab> {
		return new Promise((resolve, reject) => {
			chrome.tabs.query({ active: true, lastFocusedWindow: true }, ([activeTab]) => {
				resolve(activeTab);
			});
		});
	}

	async getActiveTabHostUrl(): Promise<string> {
		const { url } = await this.getActiveTab();
		const { protocol, host, pathname } = new URL(url);
		return `${protocol}//${host}`;
	}
}
