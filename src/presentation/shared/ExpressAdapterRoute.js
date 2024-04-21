
export default class ExpressAdapterRoute {
    static adapt(controllerInstance, methodName) {
        return async (request, response) => {
            const { body, statusCode } = await controllerInstance[methodName]({
                body: request.body,
                params: request.params,
                query: request.query
            });
            return response.status(statusCode).json(body);
        }
    }
}