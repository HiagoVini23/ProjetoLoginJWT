import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateUser1665760092134 } from "./database/migrations/1665760092134-CreateUser";
import User from "./models/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "@#Hiago23",
    database: "db_aula",
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: [CreateUser1665760092134],
    subscribers: [],
});