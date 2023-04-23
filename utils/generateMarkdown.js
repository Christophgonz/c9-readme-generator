// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (!license) return licenseBadge;
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (!license) return licenseLink;
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (!license) return licenseSection;
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
