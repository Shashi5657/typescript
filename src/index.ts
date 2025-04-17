//types for variables number, string & boolean
let myAge: number = 20;
let myName: string = "shashi";
let graduated: boolean = true;

//arrays

const courses: string[] = ["ReactJs", "NextJs", "Tyescript"];
const experience: number[] = [2, 1, 0.5];

//A tuple is a typed array with a pre-defined length and types for each index

const workExperience: [string, number] = ["ReactJs", 1.2];

//enums
//An enum is a special "class" that represents a group of constants (unchangeable variables)
enum directions {
  North = "NORTH",
  East = "EAST",
  South = "SOUTH",
  West = "WEST",
}

const getDirection = directions.North;
//prints NORTH
console.log(getDirection);

enum grades {
  first,
  second,
  third,
}

const firstGrade = grades.first;
//prints 0
console.log(firstGrade);

//functions

const returningNumber = (): number => {
  return 6 + 10;
};

const returningVoid = (): void => {
  console.log("hello");
};

const inputParameters = (userName: string, userAge: number): void => {
  console.log(`My name is ${userName} & I am ${userAge} years old`);
};

const optionalParameters = (a: number, b: number, c?: number): number => {
  return a + b + (c || 0);
};

const defaultParameters = (value: number, exponent: number = 10): number => {
  return value ** exponent;
};

const myDetails: {
  readonly name: string;
  exp: number;
  graduated?: boolean;
} = {
  name: "Shashi",
  exp: 8,
};

//type aliases

type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
  carYear: CarYear;
  carType: CarType;
  carModel: CarModel;
};

const myCar: Car = {
  carYear: 2025,
  carType: "sedan",
  carModel: "Swift",
};

//union types

const kgToLbs = (weight: number | string): number => {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
};

console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));

//Intersection types 


