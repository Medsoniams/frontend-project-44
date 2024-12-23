import { greeting } from "./cli.js";


export const printWelcome = () => {
  console.log("Welcome to the Brain Games!");
  return greeting()
}

export const getRandomNumber = (max = 10) => {
  return Math.floor(Math.random() * max);
}

export const runGame = (gameInstructions, userName) => {
  let rightAnswers = 0;
  for (let i = 1; i <= 3; i += 1) {
    const continueGame = gameInstructions();
    if (!continueGame) break;
    rightAnswers += 1;
  }

  if (rightAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
