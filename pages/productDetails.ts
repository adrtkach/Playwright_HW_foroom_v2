import { Locator, Page, } from '@playwright/test';

export class ProductDetails {
    readonly page: Page;
    readonly title: Locator;
    readonly price: Locator;
    readonly buyButton: Locator;

  constructor(page: Page) {
      this.page = page;
      this.title = page.locator('.productName').first();
      this.price = page.locator('[data-itemprop="price"]').first();
      this.buyButton = page.locator('[data-gp="buy_btn"]').first();
  }

  async clickBuy() {
    await this.buyButton.click();
  }
      
}