// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project",
  "Enter a description of your project",
  "Enter the installation instructions",
  "Enter the usage information",
  "Enter the contribution guidelines",
  "Enter the testing instructions",
  "Choose a license",
  "Enter your GitHub username",
  "Enter your email address",
  "What would you like to title your readme?",
];
const storage = [
  "title",
  "description",
  "installation",
  "usage",
  "contribution",
  "tests",
  "license",
  "username",
  "email",
  "readmeName",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("./testFiles/" + fileName, data, (err) =>
    err
      ? console.err(err)
      : console.log("Your file " + fileName + " has been generated")
  );
}

// TODO: Create a function to initialize app
function init() {
  const response = inquirer
    .prompt([
      {
        type: "input",
        name: storage[0],
        message: questions[0],
      },
      {
        type: "input",
        name: storage[1],
        message: questions[1],
      },
      {
        type: "input",
        name: storage[2],
        message: questions[2],
      },
      {
        type: "input",
        name: storage[3],
        message: questions[3],
      },
      {
        type: "input",
        name: storage[4],
        message: questions[4],
      },
      {
        type: "input",
        name: storage[5],
        message: questions[5],
      },
      {
        type: "list",
        choices: [
          "Apache License 2.0",
          "GNU General Public License v3.0",
          "MIT License",
        ],
        name: storage[6],
        message: questions[6],
      },
      {
        type: "input",
        name: storage[7],
        message: questions[7],
      },
      {
        type: "input",
        name: storage[8],
        message: questions[8],
      },
      {
        type: "input",
        name: storage[9],
        message: questions[9],
      },
    ])
    .then((response) =>
      writeToFile(response.readmeName, generateMarkdown(response))
    );
}

// Function call to initialize app
init();
