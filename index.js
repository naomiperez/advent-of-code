/* ------------------------------ Day 1 ------------------------------ */
const fs = require("fs");

function getInput() {}

function countIncreasedMeasurements(measurements) {
  let count = 0;

  for (let i = 1; i < measurements.length; i++) {
    if (measurements[i] > measurements[i - 1]) {
      count++;
    }
  }

  return count;
}

function getInput(fileName) {
  try {
    const data = fs.readFileSync(fileName, "utf8");
    return data;
  } catch (err) {
    console.error(err);
  }
}

function dayOne() {
  const inputs = getInput("inputs/day1-inputs.txt");
  let inputsArr = inputs.split("\n").map(element => parseInt(element));

  return countIncreasedMeasurements(inputsArr);
}

console.log(dayOne());
