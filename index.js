// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ("fs");


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
    name: "questions",
    message: "What are the questions?"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(({
        title, description, toc, installation, usage, contribution, test, questions
    }) => {
        console.log(title, description);
        const text = `# ${title}

## ${description}`;

writeToFile("./dist/README.md", text)
    });
}

// Function call to initialize app
init();
