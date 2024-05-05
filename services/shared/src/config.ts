import { LogLevel, NodeEnv } from "backend-nexlab";
type ConfigBase = {
    readonly LOG_NAME: string;
    readonly SERVICE_LOG: boolean;
    readonly LEVEL_LOG_GOOGLE: string;
    readonly GOOGLE_APPLICATION_CREDENTIALS: string;
    readonly LEVEL_LOG: string;
    readonly NODE_ENV: string;
}

export const initConfig = <EnvType extends Record<string, string | number> & Partial<ConfigBase>>(
    env: Partial<ConfigBase> & EnvType,
): ConfigBase & EnvType => {
    const configBase: ConfigBase = {
        LOG_NAME: process.env.LOG_NAME,
        SERVICE_LOG: Boolean(process.env.LEVEL_LOG_GOOGLE),
        LEVEL_LOG_GOOGLE: process.env.LEVEL_LOG_GOOGLE,
        GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS,
        LEVEL_LOG: process.env.LEVEL_LOG as LogLevel,
        NODE_ENV: process.env.NODE_ENV as NodeEnv,
    }
}