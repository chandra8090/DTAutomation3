import type { PlaywrightTestOptions } from '@playwright/test';

const options: PlaywrightTestOptions = {
    baseURL: 'http://maestro-qa.quantrion.com/#/secure',
    acceptDownloads: false,
    bypassCSP: false,
    colorScheme: 'light',
    deviceScaleFactor: 0,
    extraHTTPHeaders: {},
    geolocation: undefined,
    hasTouch: false,
    httpCredentials: undefined,
    ignoreHTTPSErrors: false,
    isMobile: false,
    javaScriptEnabled: false,
    locale: '',
    offline: false,
    permissions: [],
    proxy: {
        server: '',
        bypass: '',
        username: '',
        password: ''
    },
    storageState: '',
    timezoneId: '',
    userAgent: '',
    viewport: undefined,
    contextOptions: {},
    actionTimeout: 0,
    navigationTimeout: 0,
    serviceWorkers: undefined
};

export default options;