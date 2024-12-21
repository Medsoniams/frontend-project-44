#!/usr/bin/env node

import readlineSync from "readline-sync";
import { printWelcome, getRandomNumber, runGame } from "../src/index.js";

const userName = printWelcome();

console.log("Find the greatest common divisor of given numbers.")

const gameInstructions = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  let maxNumber = Math.max(firstNumber, secondNumber)
  let minNumber = Math.min(firstNumber, secondNumber)

  console.log(
    `Question: ${firstNumber} ${secondNumber}`,
  );

  const userInput = readlineSync.question("Answer: ");

  let temp = 0

  while (minNumber !== 0) {
    temp = maxNumber % minNumber;
    maxNumber = minNumber;
    minNumber = temp;
  }

  if (maxNumber === Number(userInput)) {
    console.log("Correct!");
    return true;
  } else {
    console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${maxNumber}'.
Let's try again, ${userName}!`);
    return false;
  }
}

runGame(gameInstructions, userName);
