export default class InventoryWriteRepository {
    #dbConnection;

    constructor(dbConnection) {
        this.#dbConnection = dbConnection;
    }

    async create(inventory) {
        let connection;
        try {
            connection = await this.#dbConnection.getConnection(); 
            await connection.beginTransaction();
    
            const product = inventory.product;
            await connection.execute('INSERT INTO product(id, name, brand, price) values(?, ?, ?, ?)', [
                product.id,
                product.name,
                product.brand,
                product.price
            ]);
    
            await connection.execute('INSERT INTO inventory(id, productId, quantity, status, total) values(?, ?, ?, ?, ?)', [
                inventory.id,
                product.id,
                inventory.quantity,
                inventory.status,
                inventory.total
            ]);
    
            await connection.commit();
        } catch (error) {
            console.log(error);
            await connection.rollback();
        }
    }
}