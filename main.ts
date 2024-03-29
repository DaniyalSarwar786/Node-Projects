#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
class Simple_Calculator {
    
    firstname! : number ;
    secondName! : number ;
    operator! : string	;

    constructor () {
        this.firstname! ;
        this.secondName! ;
        this.operator! ;

    }
        async get_op(){    
            const answers = await inquirer.prompt([
                { message: chalk.bgGrey("Enter first number"), type: 'number', name: 'firstNumber' },
                { message: chalk.bgGreenBright("Enter second number"), type: 'number', name: 'secondNumber' },
                {
                    message: "Enter operation",
                    type: 'list',
                    name: 'operation',
                    choices: [
                        { name: chalk.green('Add'), value: 'add' },
                        { name: chalk.red('Subtract'), value: 'subtract' },
                        { name: chalk.blue('Multiply'), value: 'multiply' },
                        { name: chalk.white('Divide'), value: 'divide' },
                        { name: chalk.yellow('Exponential'), value: 'exponential' }
                    ]
                }
            ]);
            this.firstname = answers.firstNumber;
        this.secondName = answers.secondNumber;
        this.operator = answers.operation;
    };
    
    
    
     get_answers(){
        switch(this.operator){
            case 'add':
                console.log(chalk.green("answer as per calculation is",this.firstname + this.secondName));
                break;
            case 'subtract':
                console.log(chalk.red("answer as per calculation is",this.firstname - this.secondName));
                break;
            case 'multiply':
                console.log(chalk.bgBlue("answer as per calculation is",this.firstname * this.secondName));
                break;
            case 'divide':
                console.log(chalk.bgWhite("answer as per calculation is",this.firstname / this.secondName));
                break;
            case 'exponential':
                console.log(chalk.yellow("answer as per calculation is",this.firstname ** this.secondName));
                break;
            default:
                console.log(chalk.bold('Invalid operator'));
        }}}
        

(async () => {
    const calculator = new Simple_Calculator();
    await calculator.get_op();
    calculator.get_answers();
})();