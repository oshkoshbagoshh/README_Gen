// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./questions");

// TODO: Create an array of questions for user input
// const questions = [
//     {
//         type: 'string',
//         message: 'What is the title of your project?',
//         name: 'title' // Title 
//     },
//     {
//         type: 'string',
//         message: 'Please provide details about your Project. What are you trying to accomplish?',
//         name:  'description' // Project Description 
//     },
//     {
//         type: 'string',
//         message: 'What are the requirements to install this application?',
//         name: 'installation' //  Installation
//     },
//     {
//         type: 'string',
//         message: "What are the usage requirements for this project?",
//         name: 'usage', //Usage 

//     },
//     {
//         type: 'string',
//         message: 'Who contributed to this project? (use Github usernames or links to resources used if possible.)',
//         name: 'contribution' // Contribution
//     },
//     {
//         type: 'string',
//         message:'What steps can be taken to test this application?',
//         name: 'testing' //  Testing

//     },
//     {
//         type: 'checkbox',
//         message:'What license would you like to use for this project?',
//         choices: ['Apache 2.0','GNU General Public License 3.0','MIT License','BSD 2-clause "Simplified" License', 'BSD Clause  New/Revised License','Boost Software License 3.0','Creative Commons License 1.0 Universal','Eclipse Public License 2.0','GNU Affero General Public License 3.0', 'GNU General Public License 2.0','GNU Lesser General Public License 2.1','Mozilla Public License','The Unilicense'],
//         name: 'license' // License
//     },
//     {
//         type:'string',
//         message:'What is your Github username?',
//         name:'githubusername' // Github user Name 
//     },
//     {
//         type: 'string',
//         message:'What is your e-mail address?',
//         name: 'e-mail' //Email - display this under the "Questions" Section 
//     }
    // Questions 

// use inquirer to ask the questions
// function askQuestions ()
inquirer.prompt (questions) 


    .then ((response) => {
        console.log(response)

        fs.writeFile('READMETEST1.md',generateMarkdown(response),function(err){
            err ? console.log(err) : console.log("Success!");
        })

    })



// include template literal here  with the structure and using the ${} when  needed

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
