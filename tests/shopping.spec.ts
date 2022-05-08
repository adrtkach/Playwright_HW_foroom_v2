import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { Base } from '../pages/base';
import { CartItems } from '../pages/cartItems';
import { SearchResults } from '../pages/searchResults';
import { ProductDetails } from '../models/productDetails';
import { CartModal } from '../pages/cartModal';
import { Checkout } from '../pages/checkout';

const productName: string = 'Кавомашина Nivona CafeRomatica 520';
const deliveryAddress = 'вул. Празька  (Дніпровський рн.)';
const buyerPhone = faker.phone.phoneNumber('980######')
const buyerName = faker.name.firstName();
const buyerLastName = faker.name.lastName();
const buyerEmail = faker.internet.exampleEmail();
const buyerStreet = faker.address.streetName();
const buyerHouse = faker.random.numeric(1);
const buyerFlat = faker.random.numeric(2);



test('find product', async ({ page }) => {
    
    const base = new Base(page);
    const searchResults = new SearchResults(page);
    const productDetails = new ProductDetails(page);
    const cartModal = new CartModal(page);
    const cartItems = new CartItems(page);
    const checkout = new Checkout(page);

    await page.goto('https://foroom.com.ua/');

    // Search Product

    await base.doSearch(productName);
    await expect(searchResults.title).toHaveText('Результати пошуку');
    await expect(searchResults.firstMatchedProduct).toHaveText(productName);  
    await searchResults.clickFirstMatchedProduct();

    // Adding to cart
    
    await expect(productDetails.title).toHaveText(productName);
    let productPrice = (await productDetails.price.innerHTML()).toString()
    await productDetails.buyButton.click();
    await cartModal.clickProceed();

    // Verify product name & total price in cart

    await expect.soft(cartItems.productName, 'incorrect product name').toHaveText(productName);
    await expect.soft(cartItems.productCartPrice, 'incorrect product price').toHaveText(productPrice);
    await expect.soft(cartItems.totalProductCartPrice, 'incorrect total price').toHaveText(productPrice);

    //  Check out

    await checkout.fillName(buyerName);
    await checkout.fillLastName(buyerLastName);
    await checkout.fillEmail(buyerEmail);
    await checkout.fillPhone(buyerPhone);
    await checkout.selectDeliveryType();
    await checkout.fillStreet(buyerStreet);
    await checkout.fillHouse(buyerHouse);
    await checkout.fillFlat(buyerFlat);
    await checkout.selectPaymentType();
    
    // Verify final price

    await expect(checkout.finalPrice).toHaveText(productPrice);

});