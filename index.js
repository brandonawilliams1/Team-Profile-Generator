const fs = require('fs');
const inquirer = require('inquirer');
const { addManager, next, addEngineer, addIntern } = require('./questions');
const writeToFile = require('./writeToFile');
const generateHTML = require('./generateHTML');

const logo = require('asciiart-logo');
const config = require('./package.json');
config.logoColor = 'bold-green';
config.textColor = 'green';
config.borderColor = 'yellow';


console.log(logo(config).render());


const Manager = require('./team/Manager');
const Engineer = require('./team/Engineer');
const Intern = require('./team/Intern');

let manager = {};
const engineers = [];
const interns = [];

const finish = () => {
  const htmlData = generateHTML(manager, engineers, interns);
  !fs.existsSync('assets') && fs.mkdirSync('assets');
  return writeToFile('./assets/index.html', htmlData);
};

const nextAction = () => {
  return inquirer
    .prompt(next)
    .then(answers => {
      switch (answers.nextAction) {
        case 'Add an engineer':
          return inquirer
            .prompt(addEngineer)
            .then(answers => {
              const newEngineer = new Engineer(answers.engineerName, answers.engineerEmployeeId, answers.engineerEmailAddress, answers.engineerGithubUsername)
              engineers.push(newEngineer);
              nextAction();
            })
        case 'Add an intern':
          return inquirer
            .prompt(addIntern)
            .then(answers => {
              const newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
              interns.push(newIntern);
              nextAction();
            })
        case 'Finish building the team':
          finish();
      }
    })
    .catch(error => {
      console.log(error);
    });
};

const start = () => {
  return inquirer
    .prompt(addManager)
    .then(answers => {
      const newManager = new Manager(answers.teamManagerName, answers.teamManagerEmployeeId, answers.teamManagerEmailAddress, answers.teamManagerOfficeNumber)
      nextAction();
      manager = newManager;
    })
    .catch(error => {
      console.log(error);
    });
};

start();