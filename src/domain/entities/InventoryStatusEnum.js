const inventoryStatus = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE'
}

const InventoryStatusEnum = {
    ...inventoryStatus,
    values: () => Object.values(inventoryStatus),
    keys: () => Object.keys(inventoryStatus)
}

export default InventoryStatusEnum;