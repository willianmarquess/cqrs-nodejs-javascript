import Entity from '../shared/Entity.js';
import Product from './Product.js';
import InventoryStatusEnum from './InventoryStatusEnum.js';

export default class Inventory extends Entity {
    
    #product;
    #quantity;
    #total;
    #status;

    constructor(id, product, quantity, status) {
        super(id);
        this.product = product;
        this.quantity = quantity;
        this.status = status;
        this.calcTotal();
    }

    static create({
        productName,
        productBrand,
        productPrice,
        productQuantity
    }) {
        const inventory = new Inventory(null, new Product(null, productName, productBrand, productPrice), productQuantity, InventoryStatusEnum.ACTIVE);
        return inventory;
    }

    calcTotal() {
        this.total = this.#product.price * this.#quantity;
    }

    get product() { return this.#product }
    get quantity() { return this.#quantity }
    get total() { return this.#total }
    get status() { return this.#status }

    set product(_product) {
        this.#product = _product;
    }

    set quantity(_quantity) {
        if(isNaN(_quantity)) throw new Error('quantity must be a number');
        if(_quantity < 0) throw new Error('quantity cannot be negative');
        this.#quantity = _quantity;
    }

    set total(_total) {
        if(isNaN(_total)) throw new Error('total must be a number');
        if(_total < 0) throw new Error('total cannot be negative');
        this.#total = _total;
    }

    set status(_status) {
        if(![...InventoryStatusEnum.values()].includes(_status)) throw new Error('invalid status');
        this.#status = _status;
    }

}