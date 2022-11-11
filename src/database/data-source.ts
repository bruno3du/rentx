import { DataSource } from "typeorm";

import { Category } from "../modules/cars/entities/Category";
import { Specification } from "../modules/cars/entities/Specification";
import { CreateCategories1667743194366 } from "./migrations/1667743194366-CreateCategories";
import { CreateSpecifications1667747175244 } from "./migrations/1667747175244-CreateSpecifications";
import { CreateUsers1668131356621 } from "./migrations/1668131356621-CreateUsers";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "123456",
  database: "rentx",
  synchronize: false,
  logging: false,
  entities: [Category, Specification],
  migrations: [
    CreateCategories1667743194366,
    CreateSpecifications1667747175244,
    CreateUsers1668131356621,
  ],
  subscribers: [],
});
