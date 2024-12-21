#!/usr/bin/env node

import readlineSync from "readline-sync";
import { printWelcome, getRandomNumber, runGame } from "../src/index.js";

const userName = printWelcome();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let rightAnswers = 0;
const gameInstructions = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    const isEven = randomNumber % 2 === 0;
    console.log(`Question: ${randomNumber}`);

    const userInput = readlineSync.question("Answer: ").toLowerCase();

    if ((isEven && userInput === "yes") || (!isEven && userInput === "no")) {
        console.log("Correct!");
        return true;
    } else {
        console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${isEven ? "yes" : "no"}'.
Let's try again, ${userName}!`);
        return false;
    }
}

runGame(gameInstructions, userName);
