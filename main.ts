#! /usr/bin/env node
import inquirer from "inquirer";
let myAmount = 100000;
const myPin = 5555;
let pinAnswer = await inquirer.prompt([
  {
    name: "pinQuestion",
    message: "Enter your pinCode",
    type: "number",
  },
]);
if (pinAnswer.pinQuestion === myPin) {
  let operationAnswer = await inquirer.prompt([
    {
      name: "operation",
      message: "Select any one option",
      type: "list",
      choices: ["withdraw", "balance inquiry", "fastCash"],
    }
]
);

  if (operationAnswer.operation === "fastCash") {
    let fastCash = await inquirer.prompt([
      {
        name: "exactAmount",
        message: "please select any amount.",
        type: "list",
        choices: ["500", "1000", "2000", "3000", "4000", "5000", "6000","7000","8000","9000","10000"],
      },
    ]);
    if (fastCash.exactAmount >= myAmount) {
      console.log("low balance you can not withdraw");
    } else if (fastCash.exactAmount < myAmount) {
      myAmount -= fastCash.exactAmount;
      console.log("Thank You for using this ATM");
    }
  }

  if (operationAnswer.operation === "withdraw"){
    let amountAnswer = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter multiple of 500",
        type: "number",
      }
    ]);
      
    if (amountAnswer.amount % 500 === 0 && amountAnswer.amount <= 25000 ) {
      
      console.log("Thank You for using this ATM");
    } else if(amountAnswer.amount % 500 != 0) {
       
      console.log(
        "sorry we can not proceed your tansetion please enter a valid amount"
      );
    } else if(amountAnswer.amount >25000){
      console.log("sorry we can not proceed your tansetion please enter a valid amount")
    }

    if (amountAnswer.amount >= myAmount) {
      console.log("low balance you can not withdraw");
    }
    
  } else if (operationAnswer.operation === "balance inquiry") {
    console.log("Your current balance is :" + myAmount);
  }
} else {
  console.log("incorrect pin code");
}
