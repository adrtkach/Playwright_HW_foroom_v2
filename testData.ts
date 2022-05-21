import { faker } from '@faker-js/faker';

export class Buyer {
    readonly phone;
    readonly name;
    readonly lastName;
    readonly email;
    readonly street;
    readonly house;
    readonly flat;

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

