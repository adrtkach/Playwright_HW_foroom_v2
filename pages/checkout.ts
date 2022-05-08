import { expect, Locator, Page } from '@playwright/test';

export class Checkout {
    readonly page: Page;
    readonly name: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly phone: Locator;
    readonly deliveryType: Locator;
    readonly street: Locator;
    readonly house: Locator;
    readonly flat: Locator;
    readonly finalPrice: Locator;

    constructor(page: Page) {
        this.page = page;
        this.name = page.locator('#OrderForm_name');
        this.lastName = page.locator('#OrderForm_last_name');
        this.email = page.locator('#OrderForm_email');
        this.phone = page.locator('#OrderForm_phone')
        this.deliveryType = page.locator('#OrderForm_delivery');
        this.street = page.locator('#OrderForm_streetCity');
        this.house = page.locator('#OrderForm_houseCity');
        this.flat = page.locator('#OrderForm_flatCity');
        this.finalPrice = page.locator('#order-form .product-result-block span[data-itemprop="price"]');
    }

    async fillName(buyerName) {
        await this.name.fill(buyerName);
    }
    
    async fillLastName(buyerLastName) {
        await this.lastName.fill(buyerLastName);
    }

    async fillEmail(buyerEmail) {
        await this.email.fill(buyerEmail);
    }

    async fillPhone(buyerPhone) {
        await this.phone.fill(buyerPhone);
    }

    async selectDeliveryType() {
        await this.page.selectOption('#OrderForm_delivery', {value: '2'})
    }

    async fillStreet(buyerStreet) {
        await this.street.fill(buyerStreet);
    }

    async fillHouse(buyerHouse) {
        await this.house.fill(buyerHouse);
    }

    async fillFlat(buyerFlat) {
        await this.flat.fill(buyerFlat)
    }

    async selectPaymentType() {
        await this.page.selectOption('#OrderForm_payform', {value: '1'});

    }

}