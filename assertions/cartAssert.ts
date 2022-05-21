import { expect, Locator, Page } from '@playwright/test';
import { CartItems } from '../pages/cart/cartItems';
import { Checkout } from '../pages/cart/checkout';

export class CartAssert extends CartItems {

    async cartProductName(productName) {
        await expect.soft(this.productName, 'incorrect product name').toHaveText(productName);
    }

    async cartProductPrice(productPrice) {
        await expect.soft(this.productCartPrice, 'incorrect product price').toHaveText(productPrice);
        await expect.soft(this.totalProductCartPrice, 'incorrect total price').toHaveText(productPrice);
    }


}

export class CartPriceAssert extends Checkout {

    async finalPriceAssert(productPrice) {
        await expect(this.finalPrice, 'incorrect final price').toHaveText(productPrice);
    }

}