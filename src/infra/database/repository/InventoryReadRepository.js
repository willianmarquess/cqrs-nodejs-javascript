export default class InventoryReadRepository {
    #dbConnection;

    constructor(dbConnection) {
        this.#dbConnection = dbConnection;
    }

    async create(inventoryProjection) {
        return this.#dbConnection.create(inventoryProjection);
    }

    async get() {
        return this.#dbConnection.find();
    }
}