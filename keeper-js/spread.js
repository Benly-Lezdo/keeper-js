// ... this 3dot is the symbol

// example 1
const cars = [
  {
    id: 1,
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    id: 2,
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
];

const v = [{ id: 10, color: "green" }, ...cars];
console.log("v", v);

// example 2 using push method
const cars1 = [
  {
    id: 1,
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    id: 2,
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
];

const newCar = { id: 10, color: "blue" };
const newCars = cars1;

newCars.push(newCar);

// console.log(newCars);
