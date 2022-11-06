import { DataSource } from "typeorm";

import { Category } from "../modules/cars/entities/Category";
import { CreateCategories1667743194366 } from "./migrations/1667743194366-CreateCategories";

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
  migrations: [CreateCategories1667743194366],
  subscribers: [],
});

export function createConnection(host = "database_rentx"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}
