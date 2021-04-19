// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const license = ["MIT", "GPL", "APACHE"]
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter Project Title"
    },
    {
        type: "input",
        name: "description",
        message: "Enter Project Description"
    },
    {
        type: "list",
        name: "license",
        message: "Choose License",
        choice: license
    },
    {
        type: "input",
        name: "usage",
        message: "Enter Usage Information"
    },
    {
        type: "input",
        name: "guideline",
        message: "Enter contribution Guidelines"
    },
    {
        type: "input",
        name: "test",
        message: "Enter Test Instructions"
    },
];
const promptUser = () => {
    return inquirer.prompt(questions);
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
