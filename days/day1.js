/* ---------------------- Day 1: Sonar Sweep ------------------------ */
const fs = require("fs");

function countIncreasedMeasurements(measurements) {
  let count = 0;

  for (let i = 1; i < measurements.length; i++) {
    if (measurements[i] > measurements[i - 1]) {
      count++;
    }
  }

  return count;
}

function countIncreasesSlidingWindow(measurements, windowSize) {
  let count = 0,
    currSum = 0n,
    prevSum = 0n;

  for (let i = 0; i < windowSize; i++) {
    prevSum += BigInt(measurements[i]);
  }

  console.log(prevSum);
  for (let i = windowSize; i < measurements.length; i++) {
    // add next number to currSum and then subtract the first number from previous window
    currSum = prevSum + BigInt(measurements[i]) - BigInt(measurements[i - windowSize]);

    if (currSum > prevSum) {
      count++;
    }

    prevSum = currSum;
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

module.exports = {
  dayOnePart1: () => {
    const inputs = getInput("inputs/day1-inputs.txt");
    let inputsArr = inputs.split("\n").map((element) => parseInt(element));

    return countIncreasedMeasurements(inputsArr);
  },

  dayOnePart2: () => {
    const inputs = getInput("inputs/day1-inputs.txt");
    let inputsArr = inputs.split("\n").map((element) => parseInt(element));

    return countIncreasesSlidingWindow(inputsArr, 3);
  },
};
