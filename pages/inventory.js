import { expect } from "@playwright/test";
export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.firstProduct = page.getByTestId("inventory-item-name").nth(0);
    this.secondProduct = page.getByTestId("inventory-item-name").nth(1);
    this.addToCurtButton = page.getByRole("button", { name: "ADD TO CART" });
    this.returnToProducts = page.getByRole("button", {
      name: "Go back Back to products",
    });
    this.cartButton = page.getByTestId("shopping-cart-link");
    this.cartFirstProduct = page.getByTestId("inventory-item-name").nth(0);
    this.cartSecondProduct = page.getByTestId("inventory-item-name").nth(1);
    this.checkoutbutton = page.getByRole("button", { name: "Checkout" });
    this.firstName = page.getByRole("textbox", { name: "First Name" });
    this.lastName = page.getByRole("textbox", { name: "Last Name" });
    this.postCode = page.getByRole("textbox", { name: "Zip/Postal Code" });
    this.continueButton = page.getByRole("button", { name: "Continue" });
    this.finishButton = page.getByRole("button", { name: "Finish" });
  }
  async addtocart() {
    //add the products from the landing page to cart page.
    const firstItemName = await this.firstProduct.innerText();
    const secondItemName = await this.secondProduct.innerText();
    await this.firstProduct.click();
    await this.addToCurtButton.click();
    await this.returnToProducts.click();
    await this.secondProduct.click();
    await this.addToCurtButton.click();
    await this.cartButton.click();
    //verify that right products are added in the card.
    expect(await this.cartFirstProduct.innerText()).toEqual(firstItemName);
    expect(await this.cartSecondProduct.innerText()).toEqual(secondItemName);
  }
  async checkout(firstname, lastname, postcode) {
    //checkout flow.
    await this.checkoutbutton.click();
    await this.firstName.fill(firstname);
    await this.lastName.fill(lastname);
    await this.postCode.fill(postcode);
    await this.continueButton.click();
    await this.finishButton.click();
    //verify that purchase flow is complete.
    await expect(this.page).toHaveURL(
      "https://www.saucedemo.com/checkout-complete.html"
    );
    console.log("Purchase Complete");
  }
}
