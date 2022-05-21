import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchField: Locator;
  readonly cartIcon: Locator;


  constructor(page: Page) {
    this.page = page;
    this.searchField = page.locator('#searchq');
    this.cartIcon = page.locator('.cart-wrapper .cart.svg');
  }

  async goToMainUrl() {
    await this.page.goto('https://foroom.com.ua/');
  }

  async doSearch(productName: string) {
    await this.searchField.fill(productName);
    await this.searchField.press('Enter');
  }

  async clickCart() {
    await this.cartIcon.click();
  }

}