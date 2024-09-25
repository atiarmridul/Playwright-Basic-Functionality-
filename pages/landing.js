import { expect } from "@playwright/test";

export class LandingPage {
  constructor(page) {
    this.page = page;
    this.sortingOption = page.getByTestId("product-sort-container");
  }

  async productSorter(sortoption) {
    await this.sortingOption.selectOption(sortoption);
  }

  async getProduct() {
    const productElements = await this.page.$$(".inventory_item_name");
    const products = [];

    for (const productElement of productElements) {
      const productName = await productElement.innerText();
      products.push(productName);
    }
    const productDSCE = products.reverse();
    //verifing that product shorting is working 
    expect(products[0]).toEqual(productDSCE[0]);
  }
}
