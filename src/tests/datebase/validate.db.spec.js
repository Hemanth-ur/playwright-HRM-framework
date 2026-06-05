const { test, expect }= require('@playwright/test');
const {getEmployeesWithoutManager} = require('../../utils/dbHelper');
const {readExcel} = require('../../utils/excelHelper');
const {getLatestEmail} = require('../../utils/emailHelper');



test('Validate employees without manager', async () => {

    const employees = await getEmployeesWithoutManager();

    console.table(employees);
    expect(employees.length).toBeGreaterThan(0);

});


test("Monthly HR Notification E2E", async ({ request }) => {


  const dbEmployees = await getEmployeesWithoutManager();

  const schedulerResponse = await request.post('https://test-api-url.com/scheduler/runMonthlyJob');

 expect(schedulerResponse.status()).toBe(200);

  const email = await getLatestEmail();

  expect(email.Content.Headers.Subject[0]).toContain("Employees Without Assigned Managers");

  const report = readExcel("./downloads/report.xlsx");
  
  expect(report.length).toBe(dbEmployees.length);

  
});


