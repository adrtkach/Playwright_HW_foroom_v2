import { expect, Locator, Page } from '@playwright/test';

export class CartModal {
    readonly page: Page;
    readonly modal: Locator;
    readonly proceedToCheckoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.modal = page.locator('#ajax_popup .modal-dialog');
        this.proceedToCheckoutButton = page.locator('#ajax_popup .modal-dialog .test-buy');
    }

    async clickProceed() {
        await this.proceedToCheckoutButton.click();
    }
}