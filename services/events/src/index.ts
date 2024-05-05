import { initDatabase, initServerExpress } from "shared";
import { config } from "config";

initDatabase("default", {
    host: config.POSTGRES_HOST,
    port: config.POSTGRES_PORT,
    password: config.POSTGRES_PASSWORD,
    database: config.POSTGRES_DB,
    username: config.POSTGRES_USER
})

initServerExpress({
    logName: config.LOG_NAME
})