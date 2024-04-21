import MySqlConnetion from './connection/MySqlConnection.js';
import loadScript from './scripts/loadScript.js';

export default class WriteDatabaseManager {

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

    async #executeScripts(connection) {
        const script = await loadScript();
        console.log('Executing database scripts: ', script);
        const promises = script.map(s => connection.execute(s));
        await Promise.all(promises);
    }

    getConnection() {
        return MySqlConnetion.getConnection({
            dbHost: this.#dbHost,
            dbName: this.#dbName,
            dbPass: this.#dbPass,
            dbUser: this.#dbUser,
            dbPort: this.#dbPort
        });
    }

    async init() {
        const connection = this.getConnection();
        await this.#executeScripts(connection);
        console.log('write database connected');
    }
}