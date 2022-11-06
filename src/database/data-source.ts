import "reflect-metadata";
import { DataSource } from "typeorm";

import { Category } from "../modules/cars/entities/Category";
import { CreateCategory1667267007507 } from "./migrations/1667267007507-CreateCategory";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "123456",
  database: "rentx",
  synchronize: false,
  logging: false,
  entities: [Category],
  migrations: [CreateCategory1667267007507],
  subscribers: [],
});

export function createConnection(host = "database_rentx"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}
