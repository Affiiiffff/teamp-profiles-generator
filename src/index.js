const inquirer = require("inquirer");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
// const generateHTML = require("./generateHTML");
const fs = require("fs");
const path = require("path");
const myTeam = [];

const managerInfo = async () => {
  inquirer
    .prompt([
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
    ])
    .then((response) => {
      const managerInfo = response;
      console.log(managerInfo);
    });
};
const manager = new Manager(
  managerInfo.name,
  managerInfo.id,
  managerInfo.Email,
  managerInfo.officeNumber
);
myTeam.push(manager);

teamInfo();

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
      promptEngineer();
      break;
    case "add Intern":
      promptIntern();
      break;
    default:
      buildTeam();
  }
};

managerInfo();

// const teamInfo = async () => {
//   const managerInfo = await inquirer.prompt([
//     {
//       type: "list",
//       name: "role",
//       message: "Please choose a role",
//       choices: ["Engineer", "Intern"],
//     },
//     {
//       type: "input",
//       name: "name",
//       message: "Please enter your name",
//     },
//     {
//       type: "input",
//       name: "ID",
//       message: "Please enter your ID",
//     },
//     {
//       type: "input",
//       name: "Email",
//       message: "Please enter your Email",
//     },
//     {
//       type: "input",
//       name: "Github",
//       message: "Please enter your Github",
//     },
//   ]);
// };

// const generateHTML = ({ name, ID, Email, officeNumber }) =>
//   `<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>My Team</title>
//     <link rel="stylesheet" href="./dist/assets/css/style.css" />
//     <link
//       href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
//       rel="stylesheet"
//       integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
//       crossorigin="anonymous"
//     />
//   </head>

//   <section>
//     <nav class="nav"><div>MY TEAM</div></nav>
//   </section>

//   <main class="main">
//     <div class="card" style="width: 18rem">
//       <div class="card-header">Manager: <span>${name}</span></div>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item">ID:<span>${ID}</span></li>
//         <li class="list-group-item">Email:<span>${Email}</span></li>
//         <li class="list-group-item">Office Number: <span>${officeNumber}</span></li>
//       </ul>
//     </div>

//     <div class="card" style="width: 18rem">
//       <div class="card-header">Engineer</div>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item">An item</li>
//         <li class="list-group-item">A second item</li>
//         <li class="list-group-item">A third item</li>
//       </ul>
//     </div>

//     <div class="card" style="width: 18rem">
//       <div class="card-header">Engineer</div>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item">An item</li>
//         <li class="list-group-item">A second item</li>
//         <li class="list-group-item">A third item</li>
//       </ul>
//     </div>
//     <div class="card" style="width: 18rem">
//       <div class="card-header">Engineer</div>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item">An item</li>
//         <li class="list-group-item">A second item</li>
//         <li class="list-group-item">A third item</li>
//       </ul>
//     </div>

//     <div class="card" style="width: 18rem">
//       <div class="card-header">Intern</div>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item">An item</li>
//         <li class="list-group-item">A second item</li>
//         <li class="list-group-item">A third item</li>
//       </ul>
//     </div>
//   </main>

//   <body>
//     <script
//       src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
//       integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
//       crossorigin="anonymous"
//     ></script>
//   </body>
// </html>`

// .then((managerInfo) => {
//   const htmlContent = generateMarkdown(managerInfo);

//   fs.writeFile("MyTeam.html",htmlContent , (err) =>
//   err ? console.log(err) : console.log("Successfully created HTML")
// );
