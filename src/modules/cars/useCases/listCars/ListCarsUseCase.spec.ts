import { CarsRepositoryInMemory } from "modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe("List cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });
  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Carro com espaço",
      daily_rate: 110.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Audi New Year",
      category_id: "d4e1cb91-e7d4-4b85-a801-e3e1dd9a2233",
    });

    const carsAvailable = await listCarsUseCase.execute({});

    expect(carsAvailable).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Carro com espaço",
      daily_rate: 110.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Audi New Year",
      category_id: "d4e1cb91-e7d4-4b85-a801-e3e1dd9a2233",
    });

    const carsAvailable = await listCarsUseCase.execute({ name: "Car1" });

    expect(carsAvailable).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Carro com espaço",
      daily_rate: 110.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Audi Last Year",
      category_id: "d4e1cb91-e7d4-4b85-a801-e3e1dd9a2233",
    });

    const carsAvailable = await listCarsUseCase.execute({
      brand: "Audi Last Year",
    });

    expect(carsAvailable).toEqual([car]);
  });

  it("should be able to list all available cars by category_id", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Carro com espaço",
      daily_rate: 110.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Audi Last Year",
      category_id: "d4e1cb91-e7d4-4b85-a801-e3e1dd9a2233",
    });

    const carsAvailable = await listCarsUseCase.execute({
      category_id: "d4e1cb91-e7d4-4b85-a801-e3e1dd9a2233",
    });

    expect(carsAvailable).toEqual([car]);
  });
});
