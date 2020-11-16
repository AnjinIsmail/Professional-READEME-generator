const inquirer = require('inquirer');
const fs = require("fs");
const generatePage = require("./generateMarkdown");

// array of questions for user

const promptUser = () => {
    return inquirer.prompt([
        {
            //project title
            type: 'input',
            name: 'title',
            message: 'What is your project title ?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
                // this corresponds to the title of the README 
            }
        },
        {
            //project description
            type: ' input',
            name: 'description',
            message: ' Provide a description of the project (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Project Description');
                }
            }
        },
        {
            //installation description
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please Provide a description of your installation');
                }
            }
        },
        {
            //usage description
            type: 'input',
            name: 'usage',
            message: ' Provide a description of your project usage (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please Provide a description of your project usage');
                }
            }
        },
        {
            //move down...below ?
            //contribution
            type: 'confirm',
            name: 'confirmcredits',
            message: 'do you have any collaborators?',
            default: true,
        },

        {
            type: 'input',
            name: 'credits',
            message: 'provide list of collaborators',
            when: ({ confirmcredits }) => {
                if (confirmcredits) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        {
            //license picks
            type: 'list',
            name: 'license',
            message: 'which license did you use',
            choices: ['GNU', 'ISC', 'LaTex', 'MIT']
        },

        //contact
        {
            //username
            type: 'input',
            name: 'github',
            message: 'enter your Github username',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username');
                    return false;
                }
            }
        },
        //gituhub profile link
        {
            type: 'input',
            name: 'gitlink',
            message: ' Enter the Github link to your project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Project Github link');
                }

            }
        },
        //features
        {
            type: 'confirm',
            name: 'confirmfeature',
            message: 'Does your project have features?',
            default: true,
        },
        {
            type: 'input',
            name: 'feature',
            message: 'list your projects features',
            when: ({ confirmfeature }) => {
                if (confirmfeature) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        //test
        {
            type: 'confirm',
            name: 'confirmtest',
            message: 'did you write a test for you application?',
            default: true,
        },
        {
            type: 'input',
            name: 'test',
            message: 'provide examples of how to run them',
            when: ({ confirmtest }) => {
                if (confirmtest) {
                    return true;
                } else {
                    return false;
                }
            }
        }


    ])
}

promptUser()
    .then(readmeData => {
        console.log(readmeData)
        const readMe = generatePage.generateMarkdown(readmeData);
        fs.writeFile('ReadMe.md', readMe, err => {
            if (err) throw new Error(err);
        })
    })

