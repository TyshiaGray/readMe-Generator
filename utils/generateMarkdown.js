// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
![License ${data.license}](https://img.shields.io/badge/License-${data.licenseUrl}-blueviolet)  
## Description  
${data.description}
  
## Table of Contents  
* [Installation](#installation)  
* [Usage](#usage) 
* [License](#license)
* [Contribution](#contribution)  
* [Questions](#questions)
  
## Installation  
To install this project run:  
${data.installation}  
  
## Usage  
How to use this project:  
${data.usage} 

## License
Licenses for this project is:    
${data.license}

## Contribution
${data.contributing}  

## Questions  
If you have questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.gitHub}](https://github.com/${data.gitHub}/)

`;
}

module.exports = generateMarkdown;
