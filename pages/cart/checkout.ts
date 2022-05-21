import { expect, Locator, Page } from '@playwright/test';
import { Buyer } from '../../testData';

const buyer = new Buyer;

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

    async enterBuyersData() {
        await this.name.fill(buyer.name);
        await this.lastName.fill(buyer.lastName);
        await this.email.fill(buyer.email);
        await this.phone.fill(buyer.phone);
        await this.page.selectOption('#OrderForm_delivery', {value: '2'})
        await this.street.fill(buyer.street);
        await this.house.fill(buyer.house);
        await this.flat.fill(buyer.flat)
        await this.page.selectOption('#OrderForm_payform', {value: '1'});
    }

}