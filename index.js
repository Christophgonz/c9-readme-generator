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
  "Enter the test instructions",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: questions[0],
    },
    {
      type: "input",
      name: "description",
      message: questions[1],
    },
    {
      type: "input",
      name: "installation",
      message: questions[2],
    },
    {
      type: "input",
      name: "usage",
      message: questions[3],
    },
    {
      type: "input",
      name: "contribution",
      message: questions[4],
    },
    {
      type: "input",
      name: "tests",
      message: questions[5],
    },
    {
      type: "list",
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
      ],
      name: "license",
      message: "Choose a license",
    },
    {
      type: "input",
      name: "username",
      message: "Enter your GitHub username",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address",
    },
  ]);
}

// Function call to initialize app
init();
