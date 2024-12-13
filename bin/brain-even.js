#!/usr/bin/env node

import readlineSync from "readline-sync";
import { greeting } from "../src/cli.js";

console.log("Welcome to the Brain Games!");
const userName = greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let rightAnswers = 0;

for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const isEven = randomNumber % 2 === 0;
    console.log(`Question: ${randomNumber}`);

    const userInput = readlineSync.question("Answer: ").toLowerCase();

    if ((isEven && userInput === "yes") || (!isEven && userInput === "no")) {
        console.log("Correct!");
        rightAnswers += 1;
    } else {
        console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${isEven ? "yes" : "no"}'.
Let's try again, ${userName}!`);
        break;
    }
}

if (rightAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
}
