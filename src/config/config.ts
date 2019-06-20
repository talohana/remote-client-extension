export interface Config {
	fpsRecordTime: number;
	screenshotEndpoint: string;
	sendMessageEndpoint: string;
}

export const defaultConfig: Config = {
	fpsRecordTime: 15000,
	screenshotEndpoint: '/support/screenshot'
};
