const inquirer = require('inquirer')
const fs = require('fs')
const generateRdMe = require('./utils/generateRdMe')

const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is a description of your project?",
        name: "description"
    },
    {
        type: "input",
        message: "Technologies used?",
        name: "Technologies",
        default: "jest, inquirer, nodemon, NPM, javaScript, Node.js"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "test"
    },
    {
        type: "list",
        message: "What Licenses do your application use?",
        name: "license",
        choices: [
            "Apache 2.0",
            "GNU v3",
            "MIT",
            "BSD 3-Clause",
            "Mozilla Public License 2.0",
            "Unlicense",
            ]
    },
    {
        type: "input",
        message: "Add URL to demo video",
        name: "Walkthrough Video"
    },
    
]

function writeToFile(fileName, data) {
    const markdownStr = generateRdMe(data)
    fs.writeFile(`${fileName}.md`, markdownStr, (err) =>
      err ? console.log(err) : console.log(`Success you've made a ${fileName}.md!`))
  }
  

  function init() {
    inquirer.prompt(questions)
      .then((answers) => writeToFile(answers.title, answers))
  }
  
  init();