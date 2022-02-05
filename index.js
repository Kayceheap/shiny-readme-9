// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ("fs");
const util = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "What is the description of your project?"
},
{
    type: "input",
    name: "toc",
    message: "What is the table of contents?"
},
{
    type: "input",
    name: "installation",
    message: "What are the installation instructions?"
},
{
    type: "input",
    name: "usage",
    message: "What is the usage information?"
},
{
    type: "input",
    name: "contribution",
    message: "What are the contribution guidelines?"
},
{
    type: "input",
    name: "test",
    message: "What are the test insructions?"
},
{
    type: "input",
    name: "github",
    message: "What is your github?"
},
{
    type: "input",
    name: "email",
    message: "What is your email?"
},{
    type: "list",
    name: "license",
    message: "What is the license?",
    choices: ["apache", "bsd", "mit"]
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(({
        title, description, toc, installation, usage, contribution, test, github, email, license
    }) => {
        console.log(toc)
        var tableOfContents = getTableOfContents(toc);
        var licenseText = util(license)
        const text = `# ${title}

## ${description}
## Table of Contents (Optional)

${tableOfContents}

## Installation

${installation}

## Usage

${usage}

## How to Contribute
${contribution}

## Tests
${test}

## Contuibutions
${contribution}

## Questions-Contact me below
<a href=https://github.com/${github}>My github ${github}</a> <br>
<a href=mailto:${email}>${email}</a>

## License
${licenseText}

`


writeToFile("./dist/README.md", text)
    });
}

const getTableOfContents = function(toc) {
    if(!toc) {
        return ""
    }
    var sections = toc.split(" ");
    var tableOfContents = "";
    for (var i = 0; i < sections.length; i ++) {
        tableOfContents += `- [${sections[i]}](#${sections[i]})\n`
    }
    console.log(tableOfContents);
    return tableOfContents;
}
// Function call to initialize app
init();
