#! /usr/bin/env node
import inquirer from "inquirer";
let myAmount = 1000;
const myPin = 5555;
let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pinQuestion",
            message: "Enter your pinCode",
            type: "number"
        }
    ]
);
if(pinAnswer.pinQuestion=== myPin){
   
let operationAnswer = await inquirer.prompt(
    [
        {
            name: "operation",
            message: "Select any one option",
            type: "list",
            choices: ["withdraw","balance inquiry","fastCash",]
        }
    ]
);

if(operationAnswer.operation === "fastCash"){
let fastCash = await inquirer.prompt(
    [
        {
          name: "exactAmount",
          message: "please select any amount.",
          type: "list",
          choices:['500','1000','2000','3000','4000','5000','6000']  
        }
    ]
);
if(fastCash.exactAmount >= myAmount){
    console.log("low balance you can not withdraw")}
    else if (fastCash.exactAmount < myAmount){
        myAmount -= fastCash.exactAmount;
        console.log("Remaining balance in your account is: " + myAmount);
    }
}

if(operationAnswer.operation === "withdraw"){
    let amountAnswer = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]
    );
    

    if(amountAnswer.amount >= myAmount){
        console.log("low balance you can not withdraw")}
        else if (amountAnswer.amount < myAmount){
            myAmount -= amountAnswer.amount;
            console.log("Remaining balance in your account is: " + myAmount);
        }
       
   
}
    else if(operationAnswer.operation ==="balance inquiry"){
        console.log("Your current balance is :" + myAmount);
    }

    
}
else{
    console.log("incorrect pin code")
};

