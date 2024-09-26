import { expect } from "@playwright/test";

const products = [];
export class LandingPage {
  constructor(page) {
    this.page = page;
    this.sortingOption = page.getByTestId("product-sort-container");
  }

  async productSorter(sortoption) {
    await this.sortingOption.selectOption(sortoption);
  }

  async storeProducts() {
    const productElements = await this.page.$$(".inventory_item_name");

    for (const productElement of productElements) {
      const productName = await productElement.innerText();
      products.push(productName);
    }
  }

  async verifyProductSorting() {
    const productSortASC = products.sort()
    const productDSCE = productSortASC.reverse();
    // verifing that product shorting is working
    expect(products).toEqual(productDSCE);
  }
}
