import Command from "../../domain/shared/Command.js";
import CommandHandler from "../../domain/shared/CommandHandler.js";
import Event from "../../domain/shared/Event.js";
import EventHandler from "../../domain/shared/EventHandler.js";

export default class InMemoryBus {

    #eventsHandler;
    #commandsHandler;

    constructor() {
        this.#eventsHandler = [];
        this.#commandsHandler = [];
    }

    publish(event) {
        if(!(event instanceof Event)) throw new Error('the event must inherit from the base event');

        const handlers = this.#eventsHandler.filter(handler => handler.eventName === event.eventName);

        Promise.all(handlers.map(handler => handler.handle(event)));
    }

    send(command) {
        if(!(command instanceof Command)) throw new Error('the command must inherit from the base command');

        for (const commandHandler of this.#commandsHandler) {
            if (commandHandler.commandName === command.commandName) {
                return commandHandler.handle(command);
            }
        }

        throw new Error(`undefined handler for command ${command.commandName}`)
    }

    subscribe(handler) {
        if(!(handler instanceof EventHandler)) throw new Error('the event handler must inherit from the base event handler');
        if (!handler['eventName']) throw new Error('event handler needs eventName as a string property');
        if (!handler['handle']) throw new Error('event handler needs to handle method declared');
        this.#eventsHandler.push(handler);
    }

    register(handler) {
        if(!(handler instanceof CommandHandler)) throw new Error('the command handler must inherit from the base command handler');
        if (!handler.commandName || typeof handler.commandName !== 'string') throw new Error('command handler needs commandName as a string property');

        const handlerExists = this.#commandsHandler.find(commandHandler => commandHandler.commandName === handler.commandName);
        if (handlerExists) throw new Error(`handler for ${handler.commandName} command already exists`);

        if (!handler['handle']) throw new Error('event handler needs to handle method declared');

        this.#commandsHandler.push(handler);
    }
}