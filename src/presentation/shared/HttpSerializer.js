import InvalidParamsError from '../../shared/errors/InvalidParamsError.js'

export default class HttpSerializer {

    static created(body) {
        return {
            body,
            statusCode: 201
        }
    }

    static ok(body) {
        return {
            body,
            statusCode: 200
        }
    }

    static noContent() {
        return {
            body: null,
            statusCode: 204
        }
    }

    static error(error) {
        if (error instanceof InvalidParamsError) {
            return {
                body: {
                    message: error.message,
                    errors: error.errors
                },
                statusCode: error.statusCode
            }
        }

        return {
            body: {
                message: error.message
            },
            statusCode: error.statusCode || 500
        }
    }

}