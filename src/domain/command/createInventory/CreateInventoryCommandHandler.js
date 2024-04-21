import InvalidParamsError from "../../../shared/errors/InvalidParamsError.js";
import Inventory from "../../entities/Inventory.js";
import InventoryCreatedEvent from "../../event/InventoryCreatedEvent.js";
import InventoryFactory from "../../factory/InventoryFactory.js";
import CommandHandler from "../../shared/CommandHandler.js";

export default class CreateInventoryCommandHandler extends CommandHandler {

    #bus;
    #inventoryWriteRepository;

    constructor(bus, inventoryWriteRepository) {
        super('create-inventory-command');
        this.#bus = bus;
        this.#inventoryWriteRepository = inventoryWriteRepository;
    }

    async handle(command) {
        
        const commandValidator = command.validate();

        if(!commandValidator.isValid()) {
            throw new InvalidParamsError('invalid inventory params', commandValidator.getErrors());
        }

        const {
            productName,
            productBrand,
            productPrice,
            productQuantity
        } = command
        const inventory = Inventory.create({
            productName,
            productBrand,
            productPrice,
            productQuantity
        });

        await this.#inventoryWriteRepository.create(inventory);
        
        const inventoryCreatedEvent = InventoryFactory.toInventoryCreatedEvent(inventory);

        this.#bus.publish(inventoryCreatedEvent);
        
        return  { id: inventory.id };
    }

}