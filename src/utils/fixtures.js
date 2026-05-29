import { test as base, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { AddEmployeePage } from '../pages/AddEmployeePage';
import { DashboardPage } from '../pages/DashboardPage';
import { PerformancePage } from '../pages/PerformancePage';



// ==Environment Configuration===


const config = {

    QA: {
        url: process.env.QA_URL,
        username: process.env.QA_USERNAME,
        password: process.env.QA_PASSWORD
    },

    UAT: {
        url: process.env.UAT_URL,
        username: process.env.UAT_USERNAME,
        password: process.env.UAT_PASSWORD
    }

};

const envData = config[process.env.ENV];

console.log(`Running tests on ${process.env.ENV} environment`);


// ==Fixtures==


export const test = base.extend({

    pages: async ({ page }, use) => {

        const pages = {

            loginPage: new LoginPage(page),
            addEmployeePage: new AddEmployeePage(page),
            dashboardPage: new DashboardPage(page),
            performancePage: new PerformancePage(page)

        };

        // Dynamic Login
        await pages.loginPage.navigate(envData.url);

        await pages.loginPage.login(
            envData.username,
            envData.password
        );

        await pages.loginPage.verifySuccessfulLogin();

        await use(pages);
    }

});

export { expect };