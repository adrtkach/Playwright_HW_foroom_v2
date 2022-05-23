import { expect, Locator, Page } from '@playwright/test';
import { SearchResults } from '../pages/searchResults';
import { Product } from '../testData';

const product = new Product;

export class SearchResultsAssert extends SearchResults {

    async verifyTitle() {
        await expect.soft(this.title, 'incorrect search title').toHaveText('Результати пошуку');
    }

    async verifyMatchedProduct() {
        await expect(this.matchedProduct, 'incorrect found product name').toHaveText(product.name);
    }
}
    

