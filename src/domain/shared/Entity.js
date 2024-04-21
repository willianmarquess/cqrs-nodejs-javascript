import { randomUUID } from 'node:crypto';

export default class Entity {
    #id;
    #createdAt;
    #updatedAt;

    constructor(id) {
        this.#id = id || randomUUID();
        this.#createdAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
    }

    set updatedAt(date) {
        this.#updatedAt = date;
    }

    get id() { return this.#id; }
    get createdAt() { return this.#createdAt; }
    get updatedAt() { return this.#updatedAt; }
}