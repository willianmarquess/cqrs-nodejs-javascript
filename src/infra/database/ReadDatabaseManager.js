import mongoose from 'mongoose';

export default class ReadDatabaseManager {

    #dbHost;
    #dbUser;
    #dbPass;
    #dbName;
    #dbPort;

    constructor({
        dbHost,
        dbUser,
        dbPass,
        dbName,
        dbPort
    }) {
        this.#dbHost = dbHost;
        this.#dbUser = dbUser;
        this.#dbPass = dbPass;
        this.#dbName = dbName;
        this.#dbPort = dbPort;
    }

    async init() {
        const conString = `mongodb://${this.#dbUser}:${this.#dbPass}@${this.#dbHost}:${this.#dbPort}/${this.#dbName}?authSource=admin`;
        await mongoose.connect(conString);
        console.log('read database connected');
    }
}