export default class CommandHandler {
    #commandName;

    constructor(commandName) {
        this.commandName = commandName;
    }

    handle() {
        throw new Error('this method must be overrited');
    }

    set commandName(name) {
        if(!name) throw new Error('command must to have an commandName');
        this.#commandName = name;
    }

    get commandName() { return this.#commandName; }
}