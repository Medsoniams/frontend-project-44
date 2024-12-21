#!/usr/bin/env node

import readlineSync from "readline-sync";
import { printWelcome, getRandomNumber, runGame } from "../src/index.js";

const userName = printWelcome();

console.log("What is the result of the expression?");

const operationOfNumbers = ["+", "-", "*"];

const gameInstructions = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const randomOperationOfNumbers =
    operationOfNumbers[Math.floor(Math.random() * 3)];
  console.log(
    `Question: ${firstNumber} ${randomOperationOfNumbers} ${secondNumber}`,
  );

  let expression;
  switch (randomOperationOfNumbers) {
    case "+":
      expression = firstNumber + secondNumber;
      break;
    case "-":
      expression = firstNumber - secondNumber;
      break;
    case "*":
      expression = firstNumber * secondNumber;
      break;
  }

  const userInput = readlineSync.question("Answer: ");

  if (expression === Number(userInput)) {
    console.log("Correct!");
    return true;
  } else {
    console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${expression}'.
Let's try again, ${userName}!`);
    return false;
  }
}

runGame(gameInstructions, userName);
