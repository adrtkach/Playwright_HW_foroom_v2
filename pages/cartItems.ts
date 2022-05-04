import { expect, Locator, Page } from '@playwright/test';

export class CartItems {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly productName: Locator;
  readonly productPrice: Locator;
  readonly totalProductPrice: Locator;

  constructor(page: Page) {
      this.page = page;
      this.cartLink = page.locator('.cart-wrapper .cart.svg');
      this.productName = page.locator('.name-info .name');
      this.productPrice = page.locator('.itemList .sumval [data-itemprop="price"]');
      this.totalProductPrice = page.locator('.cart-wrapper .result [data-itemprop="price"]');
  }

  async goto() {
    await this.cartLink.click();
  }

  async verifyProductName(productName) {
    await expect.soft(this.productName, 'incorrect product name').toHaveText(productName);
  }
      
  async verifyProductPrice(productPrice) {
    await expect.soft(this.productName, 'incorrect product price').toHaveText(productPrice);
  }

  async verifyTotalPrice(total) {
    await expect.soft(this.totalProductPrice, 'incorrect total price').toHaveText(total);
  }
}