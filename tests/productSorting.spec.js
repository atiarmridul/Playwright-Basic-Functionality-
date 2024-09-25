import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";
import { LandingPage } from "../pages/landing";

test.beforeEach(async ({ page }) => {
  //Should login with valid credentials
  const Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.login("standard_user", "secret_sauce");
});

test.describe("SauceDemo Purchase Flow Test", () => {
  test("Sorting by Name", async ({ page }) => {
    const SortingByName = new LandingPage(page);
    await SortingByName.productSorter("Name (Z to A)");
    await SortingByName.storeProducts();
    await SortingByName.verifyProductSorting();
  });
  

  test("Sorting By Price", async ({ page }) => {
    const SortingByPrice = new LandingPage(page);
    await SortingByPrice.productSorter("Price (high to low)");
    await SortingByPrice.storePrices();
    await SortingByPrice.verifyPriceSorting();
  });  


});
