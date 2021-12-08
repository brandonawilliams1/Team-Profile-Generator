const addManager = [
    {
      type: 'input',
      name: 'teamManagerName',
      message: "Please enter the team manager's name:",
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log("You must enter the team manager's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'teamManagerEmployeeId',
      message: "Please enter the team manager's employee ID:",
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log("You must enter the team manager's employee ID!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'teamManagerEmailAddress',
      message: "Please enter the team-manager's email address:",
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log("You must enter the team manager's email address!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'teamManagerOfficeNumber',
      message: "Please enter the team-manager's office number:",
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log("You must enter the team manager's office number!");
          return false;
        }
      }
    }
  ];
  
  const next = [
    {
      type: 'rawlist',
      name: 'nextAction',
      message: 'Would you like to:',
      choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
    }
  ]
  
  const addEngineer = [
    {
      type: 'input',
      name: 'engineerName',
      message: "Please enter the engineer's name:",
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log("You must enter the engineer's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerEmployeeId',
      message: "Please enter the engineer's employee ID:",
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log("You must enter the engineer's employee ID!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerEmailAddress',
      message: "Please enter the engineer's email address:",
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log("You must enter the engineer's email address!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerGithubUsername',
      message: "Please enter the engineer's GitHub username:",
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log("You must enter the engineer's GitHub username!");
          return false;
        }
      }
    }
  ];
  
  const addIntern = [
    {
      type: 'input',
      name: 'internName',
      message: "Please enter the intern's name:",
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log("You must enter the intern's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internId',
      message: "Please enter the intern's employee ID:",
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log("You must enter the intern's employee ID!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internEmail',
      message: "Please enter the intern's email address:",
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log("You must enter the intern's email address!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "Please enter the intern's school:",
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log("You must enter the intern's school!");
          return false;
        }
      }
    }
  ];
  
  module.exports = {addManager, next, addEngineer, addIntern};