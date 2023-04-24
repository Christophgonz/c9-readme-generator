// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
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
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
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
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (!license) return licenseSection;
  licenseSection = "This project is licensed under the terms of the " + license;
  licenseSection += renderLicenseLink(license);
  licenseSection += renderLicenseBadge(license);
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = renderLicenseSection(data.license);
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
  Check out my work at github.com/${data.username}\n
  If you have further questions, you can contact me at ${data.email}

`;
}

module.exports = generateMarkdown;
