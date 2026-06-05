import { test, expect } from '../../fixtures/base.fixture.js';

test.describe('Performance Module', () => {


test('Performance page loads correctly', async ({ pages }) => {

    await pages.performancePage.navigateToPerformancePage();

   
});



});