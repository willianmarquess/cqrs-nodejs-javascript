export default class EventHandler {
    #eventName;

    constructor(eventName) {
        this.eventName = eventName;
    }

    handle() {
        throw new Error('this method must be overrited');
    }

    set eventName(name) {
        if(!name) throw new Error('event must to have an eventName');
        this.#eventName = name;
    }

    get eventName() { return this.#eventName; }
}