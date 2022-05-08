import { expect, Locator, Page } from '@playwright/test';

export class Base {
  readonly page: Page;
  readonly searchField: Locator;
  readonly cartIcon: Locator;


  constructor(page: Page) {
    this.page = page;
    this.searchField = page.locator('#searchq');
    this.cartIcon = page.locator('.cart-wrapper .cart.svg');
  }

  async doSearch(productName: string) {
    await this.searchField.fill(productName);
    await this.searchField.press('Enter');
  }

  async clickCart() {
    await this.cartIcon.click();
  }
}