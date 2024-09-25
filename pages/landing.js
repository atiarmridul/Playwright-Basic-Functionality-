import { expect } from "@playwright/test";

const products = [];
const price = []


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
    const productDSCE = products.reverse();
    //Verify the sorting order
    expect(products[0]).toEqual(productDSCE[0]);
  }


  async storePrices() {
    const productElements = await this.page.$$(".inventory-item-price");
    for (const productElement of productElements) {
      const productPrice = await productElement.innerText();
      price.push(productPrice);
    }
  }

  async verifyPriceSorting() {
    const priceDSCE = price.reverse();
    //Verify the sorting order
    expect(products).toEqual(priceDSCE);
  }

  


}
