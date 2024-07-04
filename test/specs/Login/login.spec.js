import { test, expect } from '@playwright/test';
const loginPage = require('../../pageobjects/login.screen.js');
const testData = require('../../testdata/testData.json');

test('login to SwagLabs', async ({ page }) => {
    const loginScreen = new loginPage(page);
    await loginScreen.navigateToUrl();
    await loginScreen.loginWithCredentials();
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
});
