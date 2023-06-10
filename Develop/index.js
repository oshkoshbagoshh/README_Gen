// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./questions");

// TODO: Create an array of questions for user input (this is done in the questions.js file and then imported)
    // Questions 

// use inquirer to ask the questions
// function askQuestions ()
function askQuestions () {
inquirer.prompt (questions) 


    .then ((response) => {
        console.log(response)

        fs.writeFile('READMETEST1.md',generateMarkdown(response),function(err){
            err ? console.log(err) : console.log("Success!");
        })

    })


}
askQuestions();
// include template literal here  with the structure and using the ${} when  needed

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
