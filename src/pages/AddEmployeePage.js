import { expect } from '@playwright/test';

export class AddEmployeePage {

    constructor(page) {

        this.page = page;

        this.pimMenu = page.getByRole('link', { name: 'PIM' });

        this.addEmployeeButton = page.getByRole('button', { name: 'Add' });

        this.firstNameInput = page.getByPlaceholder('First Name');

        this.middleNameInput = page.getByPlaceholder('Middle Name')

        this.lastNameInput = page.getByPlaceholder('Last Name');

        this.saveButton = page.getByRole('button', { name: 'Save' });

        this.successMessage = page.locator('.oxd-toast');
    }

    async navigateToAddEmployee() {

        await this.pimMenu.click();

        await this.addEmployeeButton.click();
    }

    async createEmployee(firstName,middleName,lastName) {

        await this.firstNameInput.fill(firstName);

        await this.middleNameInput.fill(middleName);
        
        await this.lastNameInput.fill(lastName);

        await this.saveButton.click();
    }

    async verifyEmployeeAdded() {

        await expect(this.successMessage).toBeVisible();
    }
}