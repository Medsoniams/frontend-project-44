import readlineSync from "readline-sync";

const greeting = () => {
  const userName = readlineSync.question('Welcome to the Brain Games! ')
  return `Hello, ${userName}!`;
}

export default greeting;