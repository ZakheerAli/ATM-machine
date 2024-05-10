#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.bold.bgGray.underline.red("WELCOME TO ATM MACHINE PROJECT CREATED BY ZAKHEER ALI"));

let myBalance:number=0;
let isContinue:boolean=true;
const pinCode=9876;
let pin_ans=await inquirer.prompt([
    {
        type:"number",
        name:"password",
        message:chalk.bold.red("PLEASE ENTER THE PIN CODE"),
    }
])
if(pin_ans.password===9876){
do {
    let ans=await inquirer.prompt([
        {
            type:"list",
            name:"list",
            message:chalk.bold.green("Enter your amount:"),
            choices:["Deposite","Withdraw","Fast cash","Balance check"]
        }
    ])
    //==================================Deposite==========================================
    if(ans.list ==="Deposite"){
        let user=await inquirer.prompt([
            {
                type:"number",
                name:"Deposite_amount",
                message:chalk.bold.yellow("How much money you want to deposite?Please enter here:")
            }
         ])
         if(user.Deposite_amount>0){
            myBalance=myBalance+user.Deposite_amount;
            console.log(myBalance);
        }
    }
    //=================================Withdraw=========================================
    else if(ans.list==="Withdraw"){
        let ans=await inquirer.prompt([
            {
                type:"number",
                name:"Withdraw_amount",
                message:chalk.bold.blue("How much money you want to withdraw?"),
            }
        ])
        if(ans.Withdraw_amount<=myBalance){
            myBalance=myBalance-ans.Withdraw_amount;
            console.log(myBalance);
        }else{
            console.log("Not enough money");
        }
    }
    //===================================Fast cash================================================
    else if(ans.list==="Fast cash"){
        let user=await inquirer.prompt([
            {
                type:"list",
                name:"Fastcash_amount",
                message:chalk.bold.cyan("Please Select any one "),
                choices:["500","1000","2000","5000"]
            }
        ])
        if(user.Fastcash_amount<=myBalance){
            if(user.Fastcash_amount==="500"){
                myBalance=myBalance-user.Fastcash_amount
                console.log(myBalance);
            }else if(user.Fastcash_amount==="1000"){
                myBalance=myBalance-user.Fastcash_amount
                console.log(myBalance);
            }else if(user.Fastcash_amount==="2000"){
                myBalance=myBalance-user.Fastcash_amount
                console.log(myBalance);
            }else if(user.Fastcash_amount==="5000"){
                myBalance=myBalance-user.Fastcash_amount
                console.log(myBalance);
            }
        }
        //================================Balance check====================================
    }else if (ans.list==="Balance check"){
        console.log(chalk.bold.grey(`your Balance is ${myBalance}`));
    }
    //======================================while condition=======================================
    let while_condition=await inquirer.prompt([
        {
            type:'confirm',
            name:'userchoice',
            message:chalk.bold.gray("Do you want to continue?"),
        }
        
    ])
    if(while_condition.userchoice===false){
       isContinue=false;
       console.log(chalk.bold.underline.bgGray.red("THANK YOU FOR USING MY ATM MACHINE"));

    }
} while (isContinue);
}else{
    console.log(chalk.bold.yellow("INVALID PINCODE,PLEASE ENTER RIGHT THE PINCODE "));
}

