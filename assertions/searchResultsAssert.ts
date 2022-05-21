import { expect, Locator, Page } from '@playwright/test';
import { SearchResults } from '../pages/searchResults';

export class SearchResultsAssert extends SearchResults {

    async verifyTitle() {
        await expect(this.title).toHaveText('Результати пошуку');
    }

    async verifyMatchedProduct(productName) {
        await expect(this.matchedProduct).toHaveText(productName, {useInnerText: true})
    }
}
    

