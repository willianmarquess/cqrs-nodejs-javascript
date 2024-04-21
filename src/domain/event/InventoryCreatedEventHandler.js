import EventHandler from "../../domain/shared/EventHandler.js";
import InventoryFactory from "../factory/InventoryFactory.js";

 export default  class InventoryCreatedEventHandler extends EventHandler {
    
    #inventoryReadRepository;

    constructor(inventoryReadRepository) {
        super('inventory-created-event');
        this.#inventoryReadRepository = inventoryReadRepository;
    }

    async handle(event) {
        console.log('received event: ', event);
        const inventoryProjection = InventoryFactory.toInventoryProjection(event);
        await this.#inventoryReadRepository.create(inventoryProjection);
    }
 }