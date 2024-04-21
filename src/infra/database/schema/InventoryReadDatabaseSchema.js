import mongoose from 'mongoose';
import InventoryStatusEnum from '../../../domain/entities/InventoryStatusEnum.js';

const InventoryReadDatabaseSchema = new mongoose.Schema({
    inventoryId: {
        type: String,
        required: true,
        index: true
    },
    productId: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productBrand: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: [...InventoryStatusEnum.values()],
        required: true
    }

},
{
    timestamps: true,
    versionKey: false
});

export default InventoryReadDatabaseSchema;