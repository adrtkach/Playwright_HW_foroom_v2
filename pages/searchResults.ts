import { expect, Locator, Page,} from '@playwright/test';

export class SearchResults {
  readonly page: Page;
  readonly title: Locator;
  readonly firstMatchedProduct: Locator;

  constructor(page: Page) {
      this.page = page;
      this.title = page.locator('h1');
      this.firstMatchedProduct = page.locator('.product-block .name');
  }

  async clickFirstMatchedProduct() {
    await this.firstMatchedProduct.first().click();
  }
  
}

