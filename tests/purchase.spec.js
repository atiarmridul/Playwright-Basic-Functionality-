import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";
import { InventoryPage } from "../pages/inventory";



test.beforeEach(async ({ page }) => {
  //Should login with valid credentials
  const Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.login("standard_user", "secret_sauce");
});

test.describe("SauceDemo Purchase Flow Test", () => {
  test("Purchase Flow", async ({ page }) => {
    const Checkout = new InventoryPage(page);
    await Checkout.purchase("Sauce Labs Backpack", "Atiar", "Rahman", "1214");
  });

});
