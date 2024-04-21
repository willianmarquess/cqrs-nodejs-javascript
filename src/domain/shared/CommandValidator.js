import Command from './Command.js';
import FluentValidator from './FluentValidator.js';

export default class CommandValidator extends FluentValidator {
    #command;

    constructor(command) {
      super();
        this.#command = command;
    }

    set command(_command) {
      if(!(_command instanceof Command)) throw new Error("command must be an instance of Command base class");
      this.#command = _command;
    }

    get command() { return this.#command }

    validate() {
        throw new Error('validate methods must be overrited');
    }
}