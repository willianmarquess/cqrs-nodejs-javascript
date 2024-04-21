import Command from "../../shared/Command.js";
import CreateInventoryCommandValidator from "./CreateInventoryCommandValidator.js";

export default class CreateInventoryCommand extends Command {

    constructor(productName, productBrand, productPrice, productQuantity) {
        super('create-inventory-command');
        this.productName = productName;
        this.productBrand = productBrand;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
    }

    validate() {
        return new CreateInventoryCommandValidator(this);
    }
}