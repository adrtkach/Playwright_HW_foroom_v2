import { expect, Locator, Page } from '@playwright/test';

export class CartItems {
  readonly page: Page;
  readonly productName: Locator;
  readonly productCartPrice: Locator;
  readonly totalProductCartPrice: Locator;

  constructor(page: Page) {
      this.page = page;
      this.productName = page.locator('.name-info .name');
      this.productCartPrice = page.locator('.itemList .sumval [data-itemprop="price"]');
      this.totalProductCartPrice = page.locator('.cart-wrapper .result [data-itemprop="price"]');
  }

}
