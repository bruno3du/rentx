import { DataSource } from "typeorm";

import { dataSource } from "./data-source";

export function createConnection(host = "database_rentx"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default createConnection();
