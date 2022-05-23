import { test, expect, Page } from '@playwright/test';

import { Product } from '../testData';
import { SearchResults } from '../pages/searchResults';
import { ProductDetails } from '../pages/productDetails';
import { CartModal } from '../pages/cart/cartModal';
import { Checkout } from '../pages/cart/checkout';
import { HomePage } from '../pages/homePage';
import { SearchResultsAssert } from '../assertions/searchResultsAssert';
import { CartAssert, CartPriceAssert } from '../assertions/cartAssert';
import { ProductDetailsAssert } from '../assertions/productDetailsAssert';

test('test: buying broduct', async ({ page }) => {

    const product = new Product;
    const searchResults = new SearchResults(page);
    const productDetails = new ProductDetails(page);
    const cartModal = new CartModal(page);
    const checkout = new Checkout(page);
    const homePage = new HomePage(page);
    const searchResultsAssert = new SearchResultsAssert(page);
    const cartAssert = new CartAssert(page);
    const cartPriceAssert = new CartPriceAssert(page);
    const productDetailsAssert = new ProductDetailsAssert(page);

    // Go to main URL

    await homePage.goToMainUrl();

    // Search Product

    await homePage.doSearch(product.name);
    await searchResultsAssert.verifyTitle();
    await searchResultsAssert.verifyMatchedProduct();
    await searchResults.clickMatchedProduct();

    // Adding to cart
    
    await productDetailsAssert.productDetailsName();
    product.price = await productDetails.getProductPrice();
    await productDetails.getProductPrice();
    await productDetails.clickBuy();
    await cartModal.clickProceed();

    // Verify product name & total price in cart

    await cartAssert.cartProductName();
    await cartAssert.cartProductPrice(product.price);

    //  Check out

    await checkout.enterBuyersData();
    
    // Verify final price

    await cartPriceAssert.finalPriceAssert(product.price);

});

