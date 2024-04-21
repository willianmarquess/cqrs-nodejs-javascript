const inventoryDB = [];

export default class InMemoryInventoryRepository {
    create(inventory) {
        inventoryDB.push(inventory);
    }
}