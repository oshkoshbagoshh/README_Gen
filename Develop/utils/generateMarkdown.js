// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';

  switch (license) {
    case 'MIT':
      licenseLink = 'https://shields.io/badge/license-MIT-green'
      break;
    case 'Apache':
       licenseLink = 'https://shields.io/badge/license-Apache-blue'
      break;

    default: 
      licenseLink = '' //use this in case they don't select one of the above licenses license
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

## Description
  * ${response.description}

## Table of Contents

* [Installation](#Installation)

* [Usage](#Usage)

* [License](#License)

* [Contributing](#Contributing)

* [Tests](#Tests)

* [Questions](#questions)

## Installation
  * ${response.installation}

## Usage 
  * ${response.usage}

## Contributing
  * ${response.contribution}

  * Project was created by (https://github.com/${response.githubusername})
  
## Tests
  * ${response.testing}


## License 
* ${response.license}




## Questions
* Please direct all questions to (${response.email}). 


`; // include Link to License variable above 

}

module.exports = generateMarkdown;
