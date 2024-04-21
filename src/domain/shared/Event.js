export default class Event {
    #eventName;

    constructor(eventName) {
        this.eventName = eventName;
    }

    set eventName(name) {
        if(!name) throw new Error('event must to have an eventName');
        this.#eventName = name;
    }

    get eventName() { return this.#eventName; }
}