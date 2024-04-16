#! /usr/bin/env node
import inquirer from "inquirer";
let todolist = [];
let conditions = true;
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option you want to do",
                choices: ["add task", "delete task", "update task", "view todo-list", "exit"]
            }
        ]);
        if (option.choice === "add task") {
            await addtask();
        }
        else if (option.choice === "delete task") {
            await deletetask();
        }
        else if (option.choice === "update task") {
            await updatetask();
        }
        else if (option.choice === "view todo-list") {
            await viewtask();
        }
        else if (option.choice === "exit") {
            conditions = false;
        }
    }
};
//function to add new task to the list
let addtask = async () => {
    let newtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "enter your new task:"
        }
    ]);
    todolist.push(newtask.task);
    console.log(`\n ${newtask.task} task sucessfully added in todo-list`);
};
//function ti view all todo list tasks
let viewtask = () => {
    console.log("\n your todo-list \n");
    todolist.forEach((task, index) => {
        console.log(`${index + 1}:${task}`);
    });
};
//function to delete task from list
let deletetask = async () => {
    await viewtask();
    let taskindex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "enter the index of the task you want to delete:",
        }
    ]);
    let deletetask = todolist.splice(taskindex.index, 1);
    console.log(`\n ${deletetask} this task has been deleted sucessfully`);
};
//funtion to update a task
let updatetask = async () => {
    await viewtask();
    let update_ask_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "enter the index of the task you want to update:"
        },
        {
            name: "new_task",
            type: "number",
            message: "now enter new task name",
        },
    ]);
    todolist[update_ask_index.index] = update_ask_index.new_task;
    console.log(`\n task at index no ${update_ask_index.index} updated sucessfully [for updated list check option:"view to do list]`);
};
main();
