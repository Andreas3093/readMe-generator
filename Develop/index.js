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
        message: "Enter Project Title:"
    },
    {
        type: "input",
        name: "description",
        message: "Enter Project Description:"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter Installation Instruction:"
    },
    {
        type: "list",
        name: "license",
        message: "Choose License:",
        choices: license
    },
    {
        type: "input",
        name: "usage",
        message: "Enter Usage Information:"
    },
    {
        type: "input",
        name: "guideline",
        message: "Enter contribution Guidelines:"
    },
    {
        type: "input",
        name: "test",
        message: "Enter Test Instructions:"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter Email Address"
    }
];
const promptUser = () => {
    return inquirer.prompt(questions);
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) console.log(err);
        console.log("Succesfully readme.me created")
    });
}

// TODO: Create a function to initialize app
function init() {
    promptUser().then((answers) => {
        writeToFile("Readme.md", generateMarkdown(answers))
    }).catch((err) => {
        console.log(err + "Something Went Wrong");
    });
}

// Function call to initialize app
init();
