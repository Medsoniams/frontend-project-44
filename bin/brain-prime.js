#!/usr/bin/env node

import readlineSync from "readline-sync";
import { printWelcome, getRandomNumber, runGame } from "../src/index.js";

const userName = printWelcome();

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const gameInstructions = () => {
  const questionNumber = getRandomNumber(101);
  console.log(`Question: ${questionNumber}`);

  const userInput = readlineSync.question("Answer: ");

  if (
    (isPrime(questionNumber) && userInput === "yes") ||
    (!isPrime(questionNumber) && userInput === "no")
  ) {
    console.log("Correct!");
    return true;
  } else {
    console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${isPrime(questionNumber) ? "yes" : "no"}'.
Let's try again, ${userName}!`);
    return false;
  }
};

runGame(gameInstructions, userName);
