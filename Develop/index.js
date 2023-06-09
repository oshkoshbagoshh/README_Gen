// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'string',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'string',
        message: 'Please provide details about your Project. What are you trying to accomplish?',
        name:  'description'
    },
    {
        type: 'string',
        message: 'What are the requirements to install  this application?',
        name: 'installation'
    },
    {

    }
];


// include template literal here  with the structure and using the ${} when  needed
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
