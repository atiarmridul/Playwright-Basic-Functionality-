import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    
  //Should login with valid credentials
  await page
    .goto('https://www.saucedemo.com/');
    
    await page
    .getByRole('textbox', { name: 'Username' })
    .fill('standard_user');
    
    await page
    .getByRole('textbox', { name: 'Password' })
    .fill('secret_sauce');
    
    await page
    .getByRole('button', { name: 'Login' })
    .click();

    await expect(page)
    .toHaveURL('https://www.saucedemo.com/inventory.html');
});

test.describe('SauceDemo Login Test', () => {
  test('Purchase flow complete', async ({ page }) => {

    await page
    .getByTestId('inventory-item-description')
    .filter({hasText: 'Sauce Labs Backpack'})
    .getByRole('button', { name: 'Add to cart' })
    .click();
    
    await page
    .getByTestId('inventory-item-description')
    .filter({hasText: 'Sauce Labs Bike Light'})
    .getByRole('button', { name: 'Add to cart' })
    .click();

    await page
    .getByTestId('shopping-cart-link')
    .click();

    await expect(page)
    .toHaveURL('https://www.saucedemo.com/cart.html');

    await page
    .getByRole('button', { name: 'Checkout' })
    .click();

    await page
    .getByRole('textbox', { name: 'First Name' })
    .fill('Atiar');
    
    await page
    .getByRole('textbox', { name: 'Last Name' })
    .fill('Rahman');
    
    await page
    .getByRole('textbox', { name: 'Zip/Postal Code' })
    .fill('1214');

    await page
    .getByRole('button', { name: 'Continue' })
    .click();

    await expect(page)
    .toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

    await page
    .getByRole('button', { name: 'Finish' })
    .click();

    await expect(page)
    .toHaveURL('https://www.saucedemo.com/checkout-complete.html');

    console.log("Purchase Complete");

  })

  
})