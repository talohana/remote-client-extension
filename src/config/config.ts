export interface Config {
	fpsRecordTime: number;
	screenshotEndpoint: string;
	sendMessageEndpoint: string;
}

export const defaultConfig: Config = {
	fpsRecordTime: 15000,
	screenshotEndpoint: '/clientExtension/screenshot',
	sendMessageEndpoint: '/clientExtension/message'
};
