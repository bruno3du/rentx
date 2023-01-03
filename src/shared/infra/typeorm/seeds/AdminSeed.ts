import { hash } from "bcrypt";
import { User } from "modules/accounts/infra/typeorm/entities/User";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { v4 as uuidV4 } from "uuid";

export class AdminSeed implements Seeder {
  public async run(
    dataSource: DataSource,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const repository = dataSource.getRepository(User);
    const createAdmin = repository.create({
      id: uuidV4(),
      name: "Jorge Smith",
      email: "teste@example.com",
      password: await hash("admin", 8),
      created_at: new Date(),
      isAdmin: true,
      driver_license: "0ds08a",
    });
    await repository.save(createAdmin);
  }
}
