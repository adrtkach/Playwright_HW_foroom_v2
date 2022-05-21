import { expect, Locator, Page,} from '@playwright/test';
import {Product} from '../testData';
const product = new Product();


export class SearchResults {
  readonly page: Page;
  readonly title: Locator;
  readonly matchedProduct: Locator;
  
  

  constructor(page: Page) {
      this.page = page;
      this.title = page.locator('h1');
      this.matchedProduct = page.locator(`.product-block .name :text(${product.name})`);
    }

  async clickMatchedProduct() {
    await this.matchedProduct.click();
  }
  
}


