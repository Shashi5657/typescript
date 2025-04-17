"use strict";
let myAge = 20;
let myName = "shashi";
let graduated = true;
const courses = ["ReactJs", "NextJs", "Tyescript"];
const experience = [2, 1, 0.5];
const workExperience = ["ReactJs", 1.2];
var directions;
(function (directions) {
    directions["North"] = "NORTH";
    directions["East"] = "EAST";
    directions["South"] = "SOUTH";
    directions["West"] = "WEST";
})(directions || (directions = {}));
const getDirection = directions.North;
console.log(getDirection);
var grades;
(function (grades) {
    grades[grades["first"] = 0] = "first";
    grades[grades["second"] = 1] = "second";
    grades[grades["third"] = 2] = "third";
})(grades || (grades = {}));
const firstGrade = grades.first;
console.log(firstGrade);
const returningNumber = () => {
    return 6 + 10;
};
const returningVoid = () => {
    console.log("hello");
};
const inputParameters = (userName, userAge) => {
    console.log(`My name is ${userName} & I am ${userAge} years old`);
};
const optionalParameters = (a, b, c) => {
    return a + b + (c || 0);
};
const defaultParameters = (value, exponent = 10) => {
    return value ** exponent;
};
const myDetails = {
    name: "Shashi",
    exp: 8,
};
const myCar = {
    carYear: 2025,
    carType: "sedan",
    carModel: "Swift",
};
const kgToLbs = (weight) => {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
};
console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));
