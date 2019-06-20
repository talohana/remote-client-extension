export interface Config {
	fpsRecordTime: number;
	screenshotServer: string;
	messageServer: string;
}

export const defaultConfig: Config = {
	fpsRecordTime: 15000,
	screenshotServer: 'http://localhost:8080/images',
	messageServer: ''
};
