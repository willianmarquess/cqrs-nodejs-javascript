import { Router } from 'express';
import ExpressAdapterRoute from '../shared/ExpressAdapterRoute.js';

export default class InventoryRouter {
    static getRouter(inventoryController) {
        const inventoryRouter = Router();

        const sulfix = '/inventory'

        inventoryRouter.get(sulfix, ExpressAdapterRoute.adapt(inventoryController, 'get'));
        inventoryRouter.get(`${sulfix}/:id`, () => {});
        inventoryRouter.post(sulfix, ExpressAdapterRoute.adapt(inventoryController, 'create'));
        inventoryRouter.put(`${sulfix}/:id`, () => {});
        inventoryRouter.delete(`${sulfix}/:id`, () => {});

        return inventoryRouter;
    }
}