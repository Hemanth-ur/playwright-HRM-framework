import { test, expect } from '@playwright/test';

test('Validate employees without manager', async ({ request }) => {


 const response = await request.get('/employees/no-manager');

 expect(response.status()).toBe(200);

 const data = await response.json();

 expect(data.length).toBeGreaterThan(0);

});
