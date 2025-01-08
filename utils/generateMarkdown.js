// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  if (license === 'Apache') {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'IBM') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache') {
    return `[License](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GNU') {
    return `[[License](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'IBM') {
    return `[[License](https://opensource.org/licenses/IPL-1.0)`;
  } else if (license === 'MIT') {
    return `[[License](https://opensource.org/licenses/MIT)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache') {
    return `
    ## License
    
    This project uses an Apache license.`;
  } else if (license === 'GNU') {
    return `
    ## License
    
    This project uses an GNU license.`;
  } else if (license === 'IBM') {
    return `
    ## License
    
    This project uses an IBM license.`;
  } else if (license === 'MIT') {
    return `
    ## License
    
    This project uses an MIT license.`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

  ${data.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

  ${data.installation}

## Usage

  ${data.usage}

## Credits

GitHub Profile: ${data.github}
Email Address: ${data.email}

## License

  ${data.license}

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

  ${data.badge}

## Features

  ${data.features}

## How to Contribute

  ${data.contribution}

## Tests

  ${data.tests}
`;
}

export default generateMarkdown;
