import { initConfig } from "shared";

export const config = initConfig<{
    readonly POSTGRES_USER: string;
    readonly POSTGRES_PASSWORD: string;
    readonly POSTGRES_HOST: string;
    readonly POSTGRES_PORT: number;
    readonly POSTGRES_DB: string;
}>({
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PORT: Number(process.env.POSTGRES_PORT),
    POSTGRES_DB: process.env.POSTGRES_DB,
})