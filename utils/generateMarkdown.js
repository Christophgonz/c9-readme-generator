// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let licenseBadge = "";
  // If there is no license, return an empty string
  if (!license) return licenseBadge;

  switch (license) {
    case "Apache License 2.0":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU General Public License v3.0":
      licenseBadge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "MIT License":
      licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    default:
      break;
  }
  // return the badge depending on the license put through
  return licenseBadge;
}

// function that returns the license link
function renderLicenseLink(license) {
  let licenseLink = "";
  // If there is no license, return an empty string
  if (!license) return licenseLink;
  switch (license) {
    case "Apache License 2.0":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.txt";
      break;
    case "GNU General Public License v3.0":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.txt";
      break;
    case "MIT License":
      licenseLink = "https://www.mit.edu/~amini/LICENSE.md";
      break;
    default:
      break;
  }
  // return the link to the license
  return licenseLink;
}

// function that returns the license section of README
function renderLicenseSection(license) {
  let licenseSection = "";
  // If there is no license, return an empty string
  if (!license) return licenseSection;
  licenseSection = "This project is licensed under the terms of the " + license;
  // call to get the link to the license
  licenseSection += renderLicenseLink(license);
  // call to get the badge for the license
  licenseSection += renderLicenseBadge(license);
  // return the license section
  return licenseSection;
}

// The function that creates what goes into the input
function generateMarkdown(data) {
  // get the license section
  const license = renderLicenseSection(data.license);
  // the output that takes in the user input and outputs it into a markdown file
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [License](#license)\n
  - [Contribution](#contribution)\n
  - [Tests](#tests)\n
  - [Questions](#questions)\n

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${license}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  Check out my work at https://github.com/${data.username}\n
  If you have further questions, you can contact me at ${data.email}

`;
}

// export the function generateMarkdown
module.exports = generateMarkdown;
