const generateIndex = require('./indexgenerator');
const inquirer = require('inquirer');
const fs = require('fs');

let employeeArr = [];

addMember();

function addMember() {
inquirer
  .prompt([
    {
      type: 'list',
      name: 'Member',
      message: 'Who would you like to add to your team?',
      choices: ['Manager', 'Engineer', 'Intern', 'No new team members to add.'],
    }
  ])
  .then((answers) => {
    console.log(answers.Member);
    switch(answers.Member) {
      case 'Manager':
       return addManager(answers.Member);
      case 'Engineer':
        addEngineer(answers.Member);
        break;
      case 'Intern':
        addIntern(answers.Member);
        break;
      default:
        const indexPageContent = generateIndex(employeeArr);

        fs.writeFile('index.html', indexPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );
    }

  });

}


function addManager(employee) {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is this team members name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please assign an id to this team member'
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the team member's email.",
    },
    {
      type: 'list',
      name: 'office',
      message: 'Which office are they located in?',
      choices: ['1', '2', '3', '4'],
    },
    {
      type: 'list',
      name: 'keepgoing',
      message: 'Would you like to add another member?',
      choices: ['Yes', 'No'],
    },
  ])
  .then((answers) => {
    const manager = answers;
    manager.role = employee;
    employeeArr.push(manager);
    console.log(employeeArr);
    if(answers.keepgoing === 'Yes') {
      addMember();
    } else {
      const indexPageContent = generateIndex(employeeArr);

      fs.writeFile('index.html', indexPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
      );
    }
  })
}

function addEngineer(employee) {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is this team members name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please assign an id to this team member'
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the team member's email.",
    },
    {
      type: 'input',
      name: 'github',
      message: "What is this member's GitHub username?",
    },
    {
      type: 'list',
      name: 'keepgoing',
      message: 'Would you like to add another member?',
      choices: ['Yes', 'No'],
    },
  ])
  .then((answers) => {
    const engineer = answers;
    engineer.role = employee;
    employeeArr.push(engineer);
    console.log(employeeArr);
    if(answers.keepgoing === 'Yes') {
      addMember();
    } else {
      const indexPageContent = generateIndex(employeeArr);

      fs.writeFile('index.html', indexPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
      );
    }
  })
}

function addIntern(employee) {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is this team members name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please assign an id to this team member'
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the team member's email.",
    },
    {
      type: 'input',
      name: 'school',
      message: "What school did this member attend?",
    },
    {
      type: 'list',
      name: 'keepgoing',
      message: 'Would you like to add another member?',
      choices: ['Yes', 'No'],
    },
  ])
  .then((answers) => {
    const intern = answers;
    intern.role = employee;
    employeeArr.push(intern);
    console.log(employeeArr);
    if(answers.keepgoing === 'Yes') {
      addMember();
    } else {
      const indexPageContent = generateIndex(employeeArr);

      fs.writeFile('index.html', indexPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
      );
    }
  })
}