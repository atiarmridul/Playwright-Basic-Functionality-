export class LandingPage {
  constructor(page) {
    this.page = page;
    this.sortingOption = page.getByTestId("product-sort-container");
  }

  async sorting(sortoption) {
    await this.sortingOption.selectOption(sortoption);
  }



  async insertIntoArray() {
    const productElements = await this.page.$$(".inventory_item_name");
    const products=[];
    
    for (const productElement of productElements) {
      const productName = await productElement.innerText();
      products.push(productName);
    }
  
  }

}


