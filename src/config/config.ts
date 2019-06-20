export interface IConfig {
	fpsRecordTime: number;
	screenshotEndpoint: string;
	sendMessageEndpoint: string;
	fpsRecordEndpoint: string;
}

const extensionWebhookPrefix = '/client-support'

export const Config: IConfig = {
	fpsRecordTime: 15000,
	screenshotEndpoint: `${extensionWebhookPrefix}/screenshot`,
	fpsRecordEndpoint: `${extensionWebhookPrefix}/fps`,
	sendMessageEndpoint: `${extensionWebhookPrefix}/message`
};
