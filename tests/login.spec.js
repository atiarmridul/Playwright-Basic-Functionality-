import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";



test.beforeEach(async ({ page }) => {
  //Should login with valid credentials
  const Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.login("standard_user", "secret_sauce");
});

test.describe("SauceDemo Purchase Flow Test", () => {
  test("Login Flow", async ({ page }) => {

  });
});
