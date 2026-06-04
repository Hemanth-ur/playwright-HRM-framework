import { test, expect } from '@playwright/test';

test('Validate employees without manager', async ({ request }) => {


    //assume that the API endpoint to get employees without manager is /employees/no-manager
    /*[
             {
            "employeeId":101,
            "name":"John"
            }
     ] */


 const response = await request.get(
   '/employees/no-manager'
 );

 expect(response.status()).toBe(200);

 const data = await response.json();

 expect(data.length).toBeGreaterThan(0);

});

    const response = await request.get(
 '/employee/101'
    );

const employee = await response.json();

expect(employee.managerId).toBeNull();