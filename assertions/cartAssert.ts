import { expect } from '@playwright/test';
import { CartItems } from '../pages/cart/cartItems';
import { Checkout } from '../pages/cart/checkout';
import { Product } from '../testData';

const product = new Product;

export class CartAssert extends CartItems {

    async cartProductName() {
        await expect.soft(this.productName, 'incorrect product name').toHaveText(product.name);
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