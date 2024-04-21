import HttpSerializer from '../shared/HttpSerializer.js';

export default class InventoryController {
    #inventoryService;
    
    constructor(inventoryService) {
        this.#inventoryService = inventoryService;
    }

    async create({ body }) {
        try {
            const { productName, productBrand, productPrice, productQuantity } = body;
            const result = await this.#inventoryService.create({
                productName,
                productBrand,
                productPrice,
                productQuantity
            });
            
            return HttpSerializer.created(result);
        } catch (error) {
            return HttpSerializer.error(error);
        }
    }

    async get() {
        try {
            const result = await this.#inventoryService.get();
            return HttpSerializer.ok(result);
        } catch (error) {
            return HttpSerializer.error(error);
        }
    }
}