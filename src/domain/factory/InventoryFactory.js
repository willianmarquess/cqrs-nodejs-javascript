import InventoryCreatedEvent from "../event/InventoryCreatedEvent.js";
import InventoryProjection from "../projection/InventoryProjection.js";

export default class InventoryFactory {
    static toInventoryCreatedEvent(inventory) {
        const { id, product, quantity, total, status } = inventory;
        return new InventoryCreatedEvent({
            id, 
            product: { id: product.id, name: product.name, brand: product.brand, price: product.price }, 
            quantity, 
            total, 
            status
        });
    }

    static toInventoryProjection(inventoryCreatedEvent) {
        const { inventoryId, product, quantity, total, status } = inventoryCreatedEvent;
        const { id: productId, name: productName, brand: productBrand, price: productPrice } = product;
        return new InventoryProjection({
            inventoryId,
            productId,
            productName,
            productBrand,
            productPrice,
            quantity,
            total,
            status
        });
    }
}