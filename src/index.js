const inquirer = require("inquirer");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateHTML = require("./generateHTML");
const fs = require("fs");
const path = require("path");

const myTeam = [];

const managerInfo = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter your name",
    },

    {
      type: "input",
      name: "id",
      message: "Please enter your ID",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your Email",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter your Office number",
    },
  ]);
  console.log(answers);
  const manager = new Manager(
    answers.name,
    answers.employeeId,
    answers.email,
    answers.officeNumber
  );
  myTeam.push(manager);
  teamInfo();
};

const teamInfo = async () => {
  const userSelection = await inquirer.prompt([
    {
      type: "list",
      name: "mainMenu",
      message: "Which of the following would you like to do:",
      choices: ["Add engineer", "Add Intern", "finish"],
    },
  ]);
  switch (userSelection.mainMenu) {
    case "Add engineer":
      newEngineer();
      break;
    case "add Intern":
      newIntern();
      break;
    default:
      initializeTeam();
  }
};
const newEngineer = async () => {
  const selection = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the Engineer's name",
    },
    {
      type: "input",
      name: "employeeId",
      message: "Enter the ID of the engineer please",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the email address of the engineer",
    },
    {
      type: "input",
      name: "githubUsername",
      message: "Enter the github of the engineer",
    },
  ]);
  console.log(selection);
  const engineer = new Engineer(
    selection.name,
    selection.employeeId,
    selection.email,
    selection.githubUsername
  );
  myTeam.push(engineer);
  teamInfo();
};

const newIntern = async () => {
  const selection = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name",
    },
    {
      type: "input",
      name: "employeeId",
      message: "What is your employee ID",
    },
    {
      type: "input",
      name: "email",
      message: "what is your email address",
    },
    {
      type: "input",
      name: "school",
      message: "What is the name of your school",
    },
  ]);
  console.log(selection);
  const intern = new Intern(
    selection.name,
    selection.employeeId,
    selection.email,
    selection.school
  );
  myTeam.push(intern);
  teamInfo();
};

managerInfo();
