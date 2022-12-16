import { Specification } from "modules/cars/infra/typeorm/entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "modules/cars/repositories/ISpecificationsRepository";
import { dataSource } from "shared/infra/typeorm/data-source";
import { Repository } from "typeorm";

class SpecificationsRepository implements ISpecificationsRepository {
  private respository: Repository<Specification>;

  constructor() {
    this.respository = dataSource.getRepository(Specification);
  }

  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.respository.create({
      description,
      name,
    });

    await this.respository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.respository.findOneBy({
      name,
    });
    return specification;
  }
}

export { SpecificationsRepository };
