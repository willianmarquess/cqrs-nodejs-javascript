import Application from "./Application.js";

async function main() {
    try {
        const app = new Application();
        await app.setup();
        app.registerDependencies().start();
    } catch (error) {
        console.log(error);
    }
}

main();
