const appConfig = {
    APP_PORT: process.env.APP_PORT || 3333,
    WRITE_DB: {
        PORT: process.env.WRITEDB_PORT || 3306,
        USER: process.env.WRITEDB_USER || 'root',
        PASSWORD: process.env.WRITEDB_ROOT_PASSWORD || '123456',
        NAME: process.env.WRITEDB_DATABASE_NAME || 'inventory-ms',
        HOST: process.env.WRITEDB_HOST || 'localhost'
    },
    READ_DB: {
        PORT: process.env.READDB_PORT || 27017,
        USER: process.env.READDB_ROOT_USER || 'root',
        PASSWORD: process.env.READDB_ROOT_PASSWORD || '123456',
        NAME: process.env.READDB_DATABASE_NAME || 'inventory-ms',
        HOST: process.env.READDB_HOST || 'localhost'
    }
}

export default appConfig;