const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual seu nome ?",
    },
    {
      name: "p2",
      message: "Qual sua idade ?",
    },
  ])
  .then((answers) => {
    console.log(chalk.bgYellow.black(`seu nome é ${answers.p1} e sua idade é ${answers.p2}`));
  })
  .catch((err) => console.log(err));
