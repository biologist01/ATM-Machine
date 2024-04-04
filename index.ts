#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
console.log( "your current balance is:" + myBalance);

let myPin = 5555;
let pinAnswer = await inquirer.prompt({
  name: "pin",
  message: "Enter your pin",
  type: "number",
});

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "What do you want to do?",
      type: "list",
      choices: ["Withdraw", "Check Balance","Fast Cash"]
    },
  ]);
  if (operationAns.operation === "Withdraw") {
    let withdrawAns = await inquirer.prompt([
      {
        name: "withdraw",
        message: "How much amount do you want to withdraw?",
        type: "number",
      },
    ]);

    if (withdrawAns.withdraw > myBalance) {
      console.log("Sorry! Your account has Insufficient balance!");
    } else {
      console.log("Your new balance is: ", (myBalance -= withdrawAns.withdraw));
    }
  } else if (operationAns.operation === "Check Balance") {
    console.log("Your balance is: " + myBalance);
  }
  else if (operationAns.operation === "Fast Cash") {
      let fastCashAns = await inquirer.prompt([
        {
          name: "fastCash",
          message: "How much amount do you want to withdraw?",
          type: "list",
          choices: ["1000", "2000", "5000", "10000", "20000", "50000"]
        }
      ])
      if (fastCashAns.fastCash > myBalance) {
        console.log("Sorry! Your account has Insufficient balance!");
      } else {
        console.log("you have successfuly withdrawed: ", fastCashAns.fastCash);
        console.log("Your new balance is: ", (myBalance -= fastCashAns.fastCash));
      }
  }
} else {
  console.log("Incorrect pin code!");
}
