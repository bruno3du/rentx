import { dataSource } from "database/data-source";
import { Specification } from "modules/cars/entities/Specification";
import { Repository } from "typeorm";

import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

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
