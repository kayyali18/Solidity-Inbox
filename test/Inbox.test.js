const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

class Car {
  park() {
    return "stopped";
  }

  drive() {
    return "vroom";
  }
}

describe("Car", () => {
  let car;
  beforeEach(() => {
    car = new Car();
  });

  it("should vroom vroom when moving", () => {
    assert.equal(car.drive(), "vroom");
  });

  it("should stop when parked", () => {
    assert.equal(car.park(), "stopped");
  });
});
