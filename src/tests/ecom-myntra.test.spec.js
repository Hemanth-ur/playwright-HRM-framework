import { test, expect, chromium } from '@playwright/test';

test('Myntra Launch', async () => {

    const browser = await chromium.launch({headless: false,args: ['--disable-http2']});
    const page = await browser.newPage();

    await page.goto('https://www.myntra.com', {waitUntil: 'domcontentloaded',timeout: 60000});

    console.log(await page.title());

    await expect(page).toHaveTitle(/Myntra/i);

    await browser.close();
});

test('Navigate to jeans category on Myntra', async () => {

    const browser = await chromium.launch({ headless: false,  waitUntil: 'domcontentloaded',timeout: 60000, args: ['--disable-http2']});

    const page = await browser.newPage();

    await page.goto('https://www.myntra.com');

    await page.locator("//a[@data-group= 'men']").hover();

    await page.getByRole('link', { name: /^Jeans$/ }).click();

    await expect(page).toHaveURL(/men-jeans/);

    await browser.close();

    
});

