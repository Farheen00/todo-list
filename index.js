#! /usr/bin/env node 
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTodos = await inquirer.prompt([
        {
            name: "QuestionOne",
            type: "input",
            message: "What would you like to add in your todos?"
        },
        {
            name: "QuestionTwo",
            type: "confirm",
            message: "Do your want to add more to your todos?",
            default: "true"
        }
    ]);
    todos.push(addTodos.QuestionOne);
    condition = addTodos.QuestionTwo;
    console.log(todos);
}
