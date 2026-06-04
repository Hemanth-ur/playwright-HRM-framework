import { test, expect } from '../fixtures/base.fixture';

test.describe('Punch In/Out functionality', () => {

test('Employee can punch in/out sucessfully', async ({ pages }) => {

    await pages.dashboardPage.checkinpunch();

});

});