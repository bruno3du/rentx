import { CarsRepositoryInMemory } from "modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });
  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "HB20",
      description: "Aquele",
      daily_rate: 150,
      license_plate: "0FD02",
      fine_amount: 100,
      brand: "VOLKS",
      category_id: "32dasd",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car if license plate exists", async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "HB20",
        description: "Aquele",
        daily_rate: 150,
        license_plate: "0FD02",
        fine_amount: 100,
        brand: "VOLKS",
        category_id: "32dasd",
      });

      await createCarUseCase.execute({
        name: "HB20",
        description: "Aquele",
        daily_rate: 150,
        license_plate: "0FD02",
        fine_amount: 100,
        brand: "VOLKS",
        category_id: "32dasd",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "HB20",
      description: "Aquele",
      daily_rate: 150,
      license_plate: "0BD02",
      fine_amount: 100,
      brand: "VOLKS",
      category_id: "32dasd",
    });

    expect(car.available).toBe(true);
  });
});
