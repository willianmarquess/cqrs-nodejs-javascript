import express from 'express';

export class Server {
    #app;

    constructor() {
        this.#app = express();
    }

    setup() {
        this.#app.use(express.json());
        this.#app.get('/health-check', (_, res) => res.send('OK'))
        return this;
    }

    registerRoutes(routes = []) {
        routes.forEach(route => this.#app.use(route));
        return this;
    }

    start(PORT = 3333) {
        this.#app.listen(PORT, () => console.log(`runnig on http://localhost:${PORT}`));
    }
}