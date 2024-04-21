import Entity from '../shared/Entity.js';

export default class Product extends Entity {
    #name;
    #brand;
    #price;

    constructor(id, name, brand, price) {
        super(id);
        this.name = name;
        this.brand = brand;
        this.price = price;
    }

    get name() { return this.#name };
    get brand() { return this.#brand };
    get price() { return this.#price };

    set name(_name) {
        if(!_name) throw new Error('invalid name');
        this.#name = _name;
    }

    set brand(_brand) {
        if(!_brand) throw new Error('invalid brand');
        this.#brand = _brand;
    }

    set price(_price) {
        if(!_price || isNaN(_price) || _price < 1) throw new Error('invalid price');
        this.#price = _price;
    }
}