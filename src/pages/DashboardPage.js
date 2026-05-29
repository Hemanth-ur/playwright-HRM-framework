import{expect}from'@playwright/test';

export class DashboardPage {

    constructor(page)
    {
        this.page = page;
        
        //punch locators
        this.timeButton = page.getByRole('link', { name: 'Time' });

        this.clockInButton = page.locator("//i[@class='oxd-icon bi-stopwatch']")

        this.punchIn = page.getByRole('button', { name: 'In' });

        this.punchOut = page.getByRole('button', {name: 'Out'});

    }

        async checkinpunch() {

            await this.clockInButton.click();

            if (await this.punchIn.isVisible()) 
             {

                await this.punchIn.click();

                await expect(this.punchOut).toBeVisible();
             }

            else if (await this.punchOut.isVisible())
             {
                await this.punchOut.click();
                
                await expect(this.punchIn).toBeVisible();
             }

    

        }

    
}