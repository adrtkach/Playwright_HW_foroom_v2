import { expect, Locator, Page, } from '@playwright/test';
import { ProductDetails } from '../pages/productDetails';
import { Product } from '../testData';

const product = new Product;

export class ProductDetailsAssert extends ProductDetails {

    async productDetailsName() {
        await expect(this.title, 'incorrect product name').toHaveText(product.name);
    }

}