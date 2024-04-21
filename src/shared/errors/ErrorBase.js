export default class ErrorBase extends Error {
    #statusCode;

    constructor(message, statusCode) {
        super(message);
        this.#statusCode = statusCode;
    }

    get statusCode() { return this.#statusCode; }
}