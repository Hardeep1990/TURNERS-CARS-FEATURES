const car = require("../Car");
describe("Quote", () => {
  it("should return the car value", () => {
    const model = "Civic";
    const year = 2020;
    carModel = [...model];
    const res = car.getValue(carModel, year);
    expect(res).toBe(6620);
  });
  it("should return the car value", () => {
    const model = "Civic";
    const year = 2000;
    carModel = [...model];
    const res = car.getValue(carModel, year);
    expect(res).toBe(6600);
  });
  it("should return the car value", () => {
    const model = "Honda";
    const year = 2020;
    carModel = [...model];
    const res = car.getValue(carModel, year);
    expect(res).toBe(6220);
  });
  it("should return the car value", () => {
    const model = "bmw";
    const year = 2023;
    carModel = [...model];
    const res = car.getValue(carModel, year);
    expect(res).toBe(5823);
  });
  it("should return the car value", () => {
    const model = "toyota";
    const year = 2023;
    carModel = [...model];
    const res = car.getValue(carModel, year);
    expect(res).toBe(11623);
  });
});
//unit test file
