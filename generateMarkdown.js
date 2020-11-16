// function to generate markdown for README
function renderLicense(license) {
  if (license) {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](https://lbesson.mit-license.org/)
  `
  } return ""
}




function generateMarkdown(data) {

  if (!data.features) {
    data.features = ""
  }
  if (!data.contributing) {
    data.contributing = ""
  }
  if (!data.test) {
    data.test = ""
  }
  if (!data.credits) {
    data.credits = ""
  }
  if (!data.badges) {
    data.badges = ""
  }

  return ` 
  ${renderLicense(data.license)}
  # ${data.title}
  ## Description
 
  ${data.description}
  ## Table of Contents 
  
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [questions](#questions)
  - [screenshots](#screenshots)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}
  
  ## License
   License ${data.license} is been used 


  ## Features
  ${data.features}
  
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}
  
  ## Questions

  Github Username: ${data.github} <br>
  Github project link: ${data.gitlink} 
 
  ## Screenshots


`;
}

module.exports = {
  generateMarkdown:
    generateMarkdown
}
