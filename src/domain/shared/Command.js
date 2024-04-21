export default class Command {
    #commandName;
    #validator;

    constructor(commandName) {
        this.commandName = commandName;
    }

    set commandName(name) {
        if(!name) throw new Error('command must to have an commandName');
        this.#commandName = name;
    }

    get commandName() { return this.#commandName; }

    validate() {
        throw new Error('validate method must be overrited'); 
    }
}