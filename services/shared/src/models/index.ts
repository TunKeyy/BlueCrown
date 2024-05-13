import { IInputModel, ISequelizeOption, initSequelize } from "backend-nexlab";

export type ModuleModel = "default";

export const initDatabase = (models: IInputModel<ModuleModel>, opts: ISequelizeOption): void => {
  initSequelize(null, models, opts, {
    basePathRequireModel: __dirname,
  });
};

export * from "./default";
