import { test, expect } from '@playwright/test';
const loginPage = require('../../pageobjects/Login/login.page.js');

test('login to SwagLabs', async ({ page }) => {
    const loginScreen = new loginPage(page);
    await loginScreen.navigateToUrl();
    await loginScreen.loginWithCredentials();
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
});
