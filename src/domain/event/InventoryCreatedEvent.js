import Event from "../../domain/shared/Event.js";

export default class InventoryCreatedEvent extends Event {
    constructor({ id, product, quantity, total, status }) {
        super('inventory-created-event');
        this.inventoryId = id
        this.product = product;
        this.quantity = quantity;
        this.total = total;
        this.status = status;
    }
}