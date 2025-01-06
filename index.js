// TODO: Include packages needed for this application
import inquirer from "inquirer";
// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
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
            message: 'What command is needed to install dependencies?',
        },
        {
            type: 'input',
            name: 'usage',
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
    ])
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
