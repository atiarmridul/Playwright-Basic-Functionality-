import { expect } from "@playwright/test";

export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.firstProduct = page.getByTestId("inventory-item-description");
    this.cartButton = page.getByTestId("shopping-cart-link");
    this.checkoutbutton = page.getByRole("button", { name: "Checkout" });
    this.firstName = page.getByRole("textbox", { name: "First Name" });
    this.lastName = page.getByRole("textbox", { name: "Last Name" });
    this.postCode = page.getByRole("textbox", { name: "Zip/Postal Code" });
    this.continueButton = page.getByRole("button", { name: "Continue" });
    this.finishButton = page.getByRole("button", { name: "Finish" });
  }

  async purchase(productname, firstname, lastname, postcode) {
    await this.firstProduct
      .filter({ hasText: productname })
      .getByRole("button", { name: "Add to cart" });
    await this.cartButton.click();
    await this.checkoutbutton.click();
    await this.firstName.fill(firstname);
    await this.lastName.fill(lastname);
    await this.postCode.fill(postcode);
    await this.continueButton.click();
    await this.finishButton.click();
    await expect(this.page).toHaveURL(
      "https://www.saucedemo.com/checkout-complete.html"
    );
    console.log("Purchase Complete");
    await this.page.pause();
  }
}
