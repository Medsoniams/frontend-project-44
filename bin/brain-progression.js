#!/usr/bin/env node

import readlineSync from "readline-sync";
import { printWelcome, getRandomNumber, runGame} from "../src/index.js";

const userName = printWelcome();

console.log("What number is missing in the progression?");


const gameInstructions = () => {
  const start = getRandomNumber(101);
  const step = getRandomNumber(11);
  const numberArray = [];

  for (let i = 0; i < 10; i += 1) {
    numberArray.push(start + step * i);
  }

  const randomIndex = getRandomNumber(10);
  const hiddenNumberArray = numberArray[randomIndex]
  numberArray[randomIndex] = "..";

  console.log(
    `Question: ${numberArray.join(" ")}`,
  );

  const userInput = readlineSync.question("Answer: ");

  if (hiddenNumberArray === Number(userInput)) {
    console.log("Correct!");
    return true;
  } else {
    console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${hiddenNumberArray}'.
Let's try again, ${userName}!`);
    return false;
  }
}

runGame(gameInstructions, userName);