// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import fs from "fs";
import { type } from "os";
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command is needed to install packages?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your project used?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is required for your project?',
        choices: ['Apache', 'GNU', 'IBM', 'MIT']
    },
    {
        type: 'input',
        name: 'features',
        message: 'What features about your project would you like to highlight?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How could others contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command is needed to run tests?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile("README-GEN.md", generateMarkdown(answers))
        })
}

// Function call to initialize app
init();
