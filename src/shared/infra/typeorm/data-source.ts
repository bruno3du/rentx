import { User } from "modules/accounts/infra/typeorm/entities/User";
import { Category } from "modules/cars/infra/typeorm/entities/Category";
import { Specification } from "modules/cars/infra/typeorm/entities/Specification";
import { DataSource } from "typeorm";

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
  entities: [Category, Specification, User],
  migrations: [
    CreateCategories1667743194366,
    CreateSpecifications1667747175244,
    CreateUsers1668131356621,
  ],
  subscribers: [],
});
