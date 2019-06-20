export interface Config {
	fpsRecordTime: number;
	screenshotEndpoint: string;
}

export const defaultConfig: Config = {
	fpsRecordTime: 15000,
	screenshotEndpoint: '/support/screenshot'
};
