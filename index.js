const inquirer = require('inquirer')
const fs = require("fs")
const generate = require("./utils/generateMarkdown")
// array of questions for user
const questions = [
{
    type: "input",
    name: "title",
    message:"What is the name of your project?"
},
{
    type: "input",
    name: "description",
    message:"Describe your project?"
},
{
    type: "input",
    name: "installation",
    message:"How do you install your project?",
    default:"npm i"

},
{
    type: "list",
    name: "license",
    message:"What licenses does your project have?",
    choices:["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
},
{
    type: "input",
    name: "usage",
    message:"How do you use this project?"
},
{
    type: "input",
    name: "contributing",
    message:"Are people able to contribute to this project?",
    
},
{
    type: "input",
    name: "testing",
    message:"How will you test your project?",
    default:"npm run test"
},
{
    type: "input",
    name: "email",
    message:"What is your email?"
},
{
    type: "input",
    name: "gitHub",
    message:"What is your GitHub username?"
},
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err=>{
        if(err) throw err
        console.log("markdown created")
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers=>{
        answers.licenseUrl = encodeURI(answers.license)
        console.log(answers)
        const markdownString = generate(answers)
        const fileName = `${answers.title}.md`
        writeToFile(fileName, markdownString)
    })
}

// function call to initialize program
init();
