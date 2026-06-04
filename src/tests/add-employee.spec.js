import { test, expect } from '../fixtures/base.fixture';
import { employeeData } from '../testData/employeeData';

test.describe('Employee Management Module', () => {

test('Admin can add employee successfully', async ({ pages }) => {

    const firstName = 'Conlley';

    await pages.addEmployeePage.navigateToAddEmployee();

    await pages.addEmployeePage.createEmployee(firstName,'A','jonty');
    
    await pages.addEmployeePage.verifyEmployeeAdded();

});


test('Add employees through data-driven testing', async ({pages})=>{


    for (const employee of employeeData) {

            await test.step(`Adding employee ${employee.firstName}`, async () => {

            await pages.addEmployeePage.navigateToAddEmployee();

             await pages.addEmployeePage.createEmployee
             (
   
            employee.firstName,
            employee.middleName,
            employee.lastName

            );
    

            await pages.addEmployeePage.verifyEmployeeAdded();
        });

    }

});



});