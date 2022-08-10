const tocInstall = (item) => {
  if (!item) {
    return '';
  } else {
    return `- [Installation](#installation)`;
  }
};


const tocContribute = (item) => {
  if (!item) {
    return '';
  } else {
    return `- [Contributing](#contributing)`;
  }
};


const tocTest = (item) => {
  if (!item) {
    return '';
  } else {
    return `- [Tests](#tests)`;
  }
};


const generateInstall = install => {
  if (!install) {
    return '';
  } else {
  return `## Installation
${install}`;
  }
};


const generateContribute = cont => {
  if (!cont) {
    return '';
  } else {
  return `## Contributing
${cont}`
  }
};


const generateTest = test => {
  if (!test) {
    return '';
  } else {
  return `## Tests
${test}`
  }
};


const generateScreenshot = screenshots => {
  let scrnshotList = '';

  if (!screenshots) {
    return '';
  } else {
    screenshots.forEach(item => {
      scrnshotList += `![${item.img}](/../main/assets/images/${item.img})`;
    });
    return `${scrnshotList}`;
  }
};



const renderLicenseBadge = license => {
  if (license == 'Apache 2.0') {
    return `[![License: ${license}](https://img.shields.io/badge/License-Apache_2.0-yellowgreen)]`;
  } else if (license == 'GNU GPL v3') {
    return `[![License: ${license}](https://img.shields.io/badge/License-GPLv3-lightblue)]`;
  } else if (license == 'MIT') {
    return `[![License: ${license}](https://img.shields.io/badge/License-MIT-yellow)]`;
  } else if (license == 'No License') {
    return `[![License: ${license}](https://img.shields.io/badge/License-No_License-lightgreen)]`;
  } else {
    return '';
  }
};

const renderLicenseLink = license => {
  if (license == 'Apache 2.0') {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == 'GNU GPL v3') {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license == 'MIT') {
    return `(https://opensource.org/licenses/MIT)`;
  } else if (license == 'No License') {
    return `(https://choosealicense.com/no-permission/)`;
  } else {
    return '';
  }
};


const renderLicenseSection = license => {
  if (license == 'Apache 2.0') {
    return `This application is protected under the ${license} license. Please visit this [link](https://choosealicense.com/licenses/apache-2.0/) for more information.`;
  } else if (license == 'GNU GPL v3') {
    return `This application is protected under the ${license} license. Please visit this [link](https://choosealicense.com/licenses/gpl-3.0/) for more information.`;
  } else if (license == 'MIT') {
    return `This application is protected under the ${license} license. Please visit this [link](https://choosealicense.com/licenses/mit/) for more information.`;
  } else if (license == 'No License') {
    return `This application is protected under the ${license} exclusive copyright by default. Please visit this [link](https://choosealicense.com/no-permission/) for more information.`;
  } else {
    return `This application's current license is unavailable at this time.`;
  }
};


const generateMarkdown = data => {
  return `# ${data.title}
${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

## Description
${data.description}

## Table of Contents
${tocInstall(data.installation)}

- [Usage](#usage)
${tocContribute(data.contribute)}

${tocTest(data.tests)}

- [License](#license)
- [Questions](#questions)

${generateInstall(data.installation)}

## Usage

${data.usage}

${generateScreenshot(data.screenshots)}

${generateContribute(data.contribute)}

${generateTest(data.tests)}

## License

${renderLicenseSection(data.license)}

## Questions
if you have gotten any questions about this repository, please contact me at [${data.email}](mailto:${data.email}).
To view more, please visit my GitHub: [${data.github}](https://github.com/${data.github}).
  `;
};

module.exports = generateMarkdown;