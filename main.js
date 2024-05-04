#! usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todos",
            type: "input",
            message: "what you want to add in your todos?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false"
        }
    ]);
    todo.push(addTask.todos);
    condition = addTask.addMore;
    console.log(todo);
}
