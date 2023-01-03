import { ICreateCarDTO } from "modules/cars/dtos/ICreateCarDTO";
import { dataSource } from "shared/infra/typeorm/data-source";
import { Repository } from "typeorm";

import { ICarsRepository } from "../../../repositories/ICarsRepository";
import { Car } from "../entities/Car";

export class CarsRepository implements ICarsRepository {
  private repositories: Repository<Car>;

  constructor() {
    this.repositories = dataSource.getRepository(Car);
  }
  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repositories.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });

    await this.repositories.save(car);

    return car;
  }
  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repositories.findOneBy({ license_plate });

    return car;
  }
}
