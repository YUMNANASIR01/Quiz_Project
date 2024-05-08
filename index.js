#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: (chalk.blue("Q1.What is correct way to written variable in typescript?")),
        choices: ["let", "Var", "const"],
    },
    {
        name: "question_2",
        type: "list",
        message: (chalk.blue("Q2.Which of the following Character is commonly allowed in variables name in Typescript?")),
        choices: ["%", "@", "#", "$", "&"],
    },
    {
        name: "question_3",
        type: "list",
        message: chalk.blue(("Q3.In typescript, Which symbol is used to terminate a statement?")),
        choices: [".", ":", ";", ","],
    },
    {
        name: "question_4",
        type: "list",
        message: (chalk.blue("Q4.what is the extension of typescript file?")),
        choices: ["node", ".ts", "tsc", ".js"],
    },
    {
        name: "question_5",
        type: "list",
        message: (chalk.blue("Q5.Which method of inquirer.js is used to start the prompt interface and receive user input?")),
        choices: ["End()", "Init()", "run()", "prompt()"],
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "let":
        console.log(chalk.greenBright("1. correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("1. Incorrect!!"));
}
switch (quiz.question_2) {
    case "$":
        console.log(chalk.greenBright("2. correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("2. Incorrect!!"));
}
switch (quiz.question_3) {
    case ";":
        console.log(chalk.greenBright("3. correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("3. Incorrect!!"));
}
switch (quiz.question_4) {
    case ".ts":
        console.log(chalk.greenBright("4. correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("4. Incorrect!!"));
}
switch (quiz.question_5) {
    case "prompt()":
        console.log(chalk.greenBright("5. correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("5. Incorrect!!"));
}
;
console.log(chalk.yellowBright(`Score: ${score}`));
