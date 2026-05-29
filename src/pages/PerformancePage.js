import {expect} from '@playwright/test';


export class PerformancePage {

    constructor(page) 
    {
        this.page = page;

        //locators
        this.performance =  page.getByRole('link', { name: 'Performance' })
        this.performanceheading = page.getByRole('heading', { name: 'Performance' })
        
        
    }
        //page actions
    async navigateToPerformancePage() {
        await this.performance.click();
        await expect(this.performanceheading).toBeVisible();
    }


}