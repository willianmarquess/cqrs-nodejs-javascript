export default class InventoryProjection {
    constructor({
        inventoryId,
        productId,
        productName,
        productBrand,
        productPrice,
        quantity,
        total,
        status
    }) {
        this.inventoryId = inventoryId;
        this.productId = productId;
        this.productName = productName;
        this.productBrand = productBrand;
        this.productPrice = productPrice;
        this.quantity = quantity;
        this.total = total;
        this.status = status;
    }
}