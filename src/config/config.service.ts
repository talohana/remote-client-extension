import { Config, defaultConfig } from './config';
export class ConfigService {
	getConfig(): Promise<Config> {
		return new Promise((resolve, reject) => {
			chrome.storage.sync.get(defaultConfig, config =>
				resolve(config as Config)
			);
		});
	}

	setConfig(config: Config): void {
		chrome.storage.sync.set(config);
	}
}
