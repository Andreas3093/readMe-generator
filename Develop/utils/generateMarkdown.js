// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.toUpperCase() == "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg"
  }else if (license.toUpperCase() == "GPL") {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg"
  }else if (license.toUpperCase() == "APACHE") {
    return "https://img.shields.io/badge/License-Apache%202.0-blue.svg"
  }else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.toUpperCase() == "MIT") {
    return "https://opensource.org/licenses/MIT";
  }else if (license.toUpperCase() == "GPL") {
    return "https://www.gnu.org/licenses/gpl-3.0"
  }else if (license.toUpperCase() == "APACHE"){
    return "https://opensource.org/licenses/Apache-2.0"
  }else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.toUpperCase() == "MIT") {
    return "MIT license"
  }else if (license.toUpperCase() == "GPL") {
    return "GPL license"
  }else if (license.toUpperCase() == "APACHE") {
    return "APACHE license"
  }else {
    return "";
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title
  ${data.title}
  
  [![License](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})
  
  ## Table of contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage Information](#usage-information)
  - [License](#license)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Procedure](#test-procedure)
  - [Questions](#questions)
  
  ## Description
     ${data.description}

  ## Installation
     ${(data.installation == "")?"N/A":data.installation}

  ## Usage Information
     ${(data.usage == "")?"N/A":data.usage}

  ## License
     ${(renderLicenseSection(data.license) == "")?"N/A":renderLicenseSection(data.license)}
  
  ## Contribution Guidelines
     ${(data.guideline == "")?"N/A":data.guideline}

  ## Test Procedure
     ${(data.test == "")?"N/A":data.test}

  ## Questions
    if you have questions then please feel free to contact on these addresses,
  Github: [${data.github}](https://github.com/${data.github})
  
  Email: [${data.email}](${data.email})
    `;
}

module.exports = generateMarkdown;
