import { test, expect } from '@playwright/test';
const LoginPage = require('../../pageobjects/Login/login.page.js');
const InventoryPage = require('../../pageobjects/Inventory/inventory.page.js');

test('add product to cart and verify', async ({ page }) => {
    const loginScreen = new LoginPage(page);
    const inventoryScreen = new InventoryPage(page);
    await loginScreen.navigateToUrl();
    await loginScreen.loginWithCredentials();
    await page.waitForTimeout(2000);
    await inventoryScreen.clickProduct();
    await page.waitForTimeout(2000);
    await inventoryScreen.addProductToCart();
    await page.waitForTimeout(2000);
    await inventoryScreen.navigateToCart();
    await page.waitForTimeout(5000);
    const isProductInCart = await inventoryScreen.verifyProductInCart('Sauce Labs Backpack');
    expect(isProductInCart).toBe(true);
});
