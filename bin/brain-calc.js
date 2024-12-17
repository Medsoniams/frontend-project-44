#!/usr/bin/env node

import readlineSync from "readline-sync";
import { greeting } from "../src/cli.js";

console.log("Welcome to the Brain Games!");
const userName = greeting();

console.log("What is the result of the expression?");

const operationOfNumbers = ["+", "-", "*"];

let rightAnswers = 0;
for (let i = 1; i <= 3; i += 1) {
  const [firstNumber, secondNumber] = [
    Math.floor(Math.random() * 20),
    Math.floor(Math.random() * 20),
  ];
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
  } else {
    console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${expression}'.
Let's try again, ${userName}!`);
    break;
  }
  rightAnswers += 1;
}

if (rightAnswers === 3) {
  console.log(`Congratulations, ${userName}!`);
}
