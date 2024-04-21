import mongoose from 'mongoose';
import InventoryReadDatabaseSchema from '../schema/InventoryReadDatabaseSchema.js';

export default class InventoryReadDatabaseModel extends mongoose.model {
    constructor() {
        super('inventory', InventoryReadDatabaseSchema)
    }
}