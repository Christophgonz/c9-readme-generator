// Required for writing the output file
const fs = require("fs");
// Required to prompt the user
const inquirer = require("inquirer");
// required to take the user responses and make the file to be output
const generateMarkdown = require("./utils/generateMarkdown.js");

// The questions the prompt will ask the user
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
// The variable names the responses will be stored under
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

// The function that takes the output generated from generateMarkdown and writes it to the file that the user specifies
function writeToFile(fileName, data) {
  fs.writeFile("./testFiles/" + fileName, data, (err) =>
    err
      ? // If there is an error log out the error
        console.err(err)
      : // Else, let the user know the file has been generated
        console.log("Your file " + fileName + " has been generated")
  );
}

function init() {
  const response = inquirer
    // Prompt the user for their input for what they want in their readme
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
    // After getting input call generateMarkdown, feeding the in what the user answered
    // then call writeToFile using the user input for the name
    .then((response) => {
      writeToFile(response.readmeName, generateMarkdown(response));
    });
}

// Function call to initialize app
init();
