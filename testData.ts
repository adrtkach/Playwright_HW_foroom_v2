import { faker } from '@faker-js/faker';

export class Buyer {
    readonly phone: string;
    readonly name: string;
    readonly lastName: string;
    readonly email: string;
    readonly street: string;
    readonly house: string;
    readonly flat: string;

    constructor() {
        this.phone = faker.phone.phoneNumber('980######')
        this.name = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.email = faker.internet.exampleEmail();
        this.street = faker.address.streetName();
        this.house = faker.random.numeric(100);
        this.flat = faker.random.numeric(2);
    }
}

export class Product {
    readonly name: string;
    price;

    constructor() {
        this.name = 'Кавомашина Nivona CafeRomatica 520'
    } 
}

