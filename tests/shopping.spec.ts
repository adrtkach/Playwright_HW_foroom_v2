import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { CartItems } from '../pages/cartItems';

const productName = 'Кавомашина NIVONA CafeRomatica NICR 790';
const buyerPhone = '980980980';
const buyerEmail = 'email@test.com';
const buyerName = 'Anna';
const buyerSurname = 'Maria';
const deliveryAddress = 'вул. Празька  (Дніпровський рн.)';

faker.phone.phoneNumber('980######')

test('basic test', async ({ page }) => {
    const cartItems = new CartItems(page);
  
});