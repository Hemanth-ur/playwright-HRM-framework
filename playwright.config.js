import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({

    testDir: './src/tests',

    fullyParallel: true,

    workers: process.env.CI ? 2 : 4,

    timeout: 30000,

    retries: process.env.CI ? 2 : 1,

    forbidOnly: !!process.env.CI,

    reporter: [
        ['html'],
        ['line'],
        ['allure-playwright']
    ],

    globalTeardown: require.resolve('./src/utils/Reports_environmentInfo'),

    use: {

        baseURL:
            process.env.ENV === 'QA'
                ? process.env.QA_URL
                : process.env.UAT_URL,

        headless: process.env.CI ? true : true,

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        trace: 'on-first-retry',

        testIdAttribute: 'data-testid'
    },

    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' }
        }
    ]
});