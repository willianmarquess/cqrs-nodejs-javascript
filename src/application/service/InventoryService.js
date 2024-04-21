import CreateInventoryCommand from "../../domain/command/createInventory/CreateInventoryCommand.js";

export default class InventoryService {

    #bus;
    #inventoryReadRepository;

    constructor(bus, inventoryReadRepository) {
        this.#bus = bus;
        this.#inventoryReadRepository = inventoryReadRepository;
    }

    async create({ productName, productBrand, productPrice, productQuantity }) {
        const result = await this.#bus.send(new CreateInventoryCommand(productName, productBrand, productPrice, productQuantity));
        return result;
    }

    async get() {
        return this.#inventoryReadRepository.get();
    }
}