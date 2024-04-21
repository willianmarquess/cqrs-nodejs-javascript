import CommandValidator from "../../shared/CommandValidator.js";

export default class CreateInventoryCommandValidator  extends CommandValidator {

    constructor(createInventoryCommand) {
        super(createInventoryCommand);
    }

    validate() {
        this.createRule(this.command.productName, 'productName')
            .isString()
            .isRequired()
            .build();
        this.createRule(this.command.productBrand, 'productBrand')
            .isString()
            .isRequired()
            .build();
        this.createRule(this.command.productPrice, 'productPrice')
            .isNumber()
            .isBetween(1, 5000)
            .isRequired()
            .build();
        this.createRule(this.command.productQuantity, 'productQuantity')
            .isNumber()
            .isGreaterThan(1)
            .isLessThan(500)
            .isRequired()
            .build();
    }
}