import ErrorBase from "./ErrorBase.js";

export default class InvalidParamsError extends ErrorBase {

    #errors;

    constructor(message, errors) {
        super(message, 400);
        this.#errors = errors;
    }

    get errors() { return this.#errors; }
}