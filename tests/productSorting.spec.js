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
  test("Sorting", async ({ page }) => {
    const Sorting = new LandingPage(page);
    await Sorting.productSorter("Name (Z to A)");
    await Sorting.storeProducts();
    await Sorting.verifyProductSorting();
  });
});
