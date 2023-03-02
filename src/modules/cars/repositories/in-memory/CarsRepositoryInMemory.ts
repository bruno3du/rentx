import { ICreateCarDTO } from "modules/cars/dtos/ICreateCarDTO";
import { Car } from "modules/cars/infra/typeorm/entities/Car";

import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    name,
    license_plate,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      brand,
      category_id,
      license_plate,
      description,
      fine_amount,
      daily_rate,
      name,
    });

    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find((car) => car.license_plate === license_plate);
  }

  async findAvailable({
    brand,
    category_id,
    name,
  }: {
    brand?: string;
    category_id?: string;
    name?: string;
  }): Promise<Car[]> {
    let carsAvailable = await this.cars.filter((cars) => cars.available);

    if (brand) {
      carsAvailable = carsAvailable.filter((car) => car.brand === brand);
    }

    if (category_id) {
      carsAvailable = carsAvailable.filter(
        (car) => car.category_id === category_id
      );
    }

    if (name) {
      carsAvailable = carsAvailable.filter((car) => car.name === name);
    }
    return carsAvailable;
  }
}

export { CarsRepositoryInMemory };
