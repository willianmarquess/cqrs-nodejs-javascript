import InventoryService from "./application/service/InventoryService.js";
import CreateInventoryCommandHandler from "./domain/command/createInventory/CreateInventoryCommandHandler.js";
import InventoryCreatedEventHandler from "./domain/event/InventoryCreatedEventHandler.js";
import InMemoryBus from "./infra/bus/InMemoryBus.js";
import appConfig from "./infra/config/AppConfig.js";
import WriteDatabaseManager from "./infra/database/WriteDatabaseManager.js";
import InMemoryInventoryRepository from "./infra/database/repository/InMemoryInventoryRepository.js";
import InventoryController from "./presentation/controller/InventoryController.js";
import InventoryRouter from "./presentation/routes/InventoryRoutes.js";
import { Server } from "./presentation/server.js";
import InventoryWriteRepository from "./infra/database/repository/InventoryWriteRepository.js";
import ReadDatabaseManager from "./infra/database/ReadDatabaseManager.js";
import InventoryReadRepository from "./infra/database/repository/InventoryReadRepository.js";
import InventoryReadDatabaseModel from "./infra/database/model/InventoryReadDatabaseModel.js";

export default class Application {

    #server;
    #writeDatabaseManager
    
    constructor() {
        this.#server = new Server();
        this.#writeDatabaseManager = null;
    }

    async setup() {
        const writeDatabaseManager = new WriteDatabaseManager({
            dbHost: appConfig.WRITE_DB.HOST,
            dbUser: appConfig.WRITE_DB.USER,
            dbPass: appConfig.WRITE_DB.PASSWORD,
            dbName: appConfig.WRITE_DB.NAME
        });
    
        await writeDatabaseManager.init();
    
        this.#writeDatabaseManager = writeDatabaseManager;

        const readDatabaseManager = new ReadDatabaseManager({
            dbHost: appConfig.READ_DB.HOST,
            dbUser: appConfig.READ_DB.USER,
            dbPass: appConfig.READ_DB.PASSWORD,
            dbName: appConfig.READ_DB.NAME,
            dbPort: appConfig.READ_DB.PORT
        });

        await readDatabaseManager.init();

        this.#server.setup();
    }

    #registerCommandHandlers(bus) {
        const inventoryWriteRepository = new InventoryWriteRepository(this.#writeDatabaseManager.getConnection());
        const createInventoryCommandHandler = new CreateInventoryCommandHandler(bus, inventoryWriteRepository);
        bus.register(createInventoryCommandHandler);
    }

    #registerEventHandlers(bus) {
        const inventoryReadDatabaseModel = new InventoryReadDatabaseModel();
        const inventoryReadRepository = new InventoryReadRepository(inventoryReadDatabaseModel);
        const inventoryCreatedEventHandler = new InventoryCreatedEventHandler(inventoryReadRepository);
        bus.subscribe(inventoryCreatedEventHandler);
    }

    registerDependencies() {

        const inMemoryBus = new InMemoryBus();

        this.#registerCommandHandlers(inMemoryBus);
        this.#registerEventHandlers(inMemoryBus);

        const inventoryReadDatabaseModel = new InventoryReadDatabaseModel();
        const inventoryReadRepository = new InventoryReadRepository(inventoryReadDatabaseModel);
        const inventoryService = new InventoryService(inMemoryBus, inventoryReadRepository);
        const inventoryController = new InventoryController(inventoryService);

        this.#server.registerRoutes([InventoryRouter.getRouter(inventoryController)]);

        return this;
    }

    start() {
        this.#server.start(appConfig.APP_PORT);
    }
}