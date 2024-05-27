import { Express } from "express";
import { initServerExpress } from "shared";
import { router } from "./actions/router";
import { config } from "./config";
// initDatabase("default", {
//   host: config.POSTGRES_HOST,
//   port: config.POSTGRES_PORT,
//   password: config.POSTGRES_PASSWORD,
//   database: config.POSTGRES_DB,
//   username: config.POSTGRES_USER,
// });
const listenAppStarted = (app: Express) => {
  app.use("/", router);
};
initServerExpress({
  logName: config.LOG_NAME,
  listenAppStarted,
});
