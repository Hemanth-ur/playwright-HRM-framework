import { test, expect } from '../utils/fixtures';

test.describe('Punch In/Out functionality', () => {

test('Employee can punch in/out sucessfully', async ({ pages }) => {

    await pages.dashboardPage.checkinpunch();

});

});