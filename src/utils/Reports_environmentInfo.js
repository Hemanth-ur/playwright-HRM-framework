const fs = require('fs');

async function globalTeardown() {

const currentURL = process.env.ENV === 'QA'
            ? process.env.QA_URL
            : process.env.UAT_URL;
const environmentInfo = `
Browser=Chromium
Environment=${process.env.ENV}
BaseURL= ${currentURL}
Platform=${process.platform}
Node.Version=${process.version}
Framework=Playwright + JavaScript
QA.Owner=Automation Team
`;

    fs.writeFileSync(
    'allure-results/environment.properties',
    environmentInfo
    );

}

module.exports = globalTeardown;