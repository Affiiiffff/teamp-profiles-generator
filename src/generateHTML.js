const createManager = function (manager) {
  return `
  <div class="card" style="width: 18rem">
  <div class="card-header">Manager : <span>${manager.name}</span></div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID : <span>${manager.id}</span></li>
    <li class="list-group-item">Email : <span>${manager.email}</span></li>
    <li class="list-group-item">Office Number : <span>${manager.officeNumber}</span></li>
  </ul>
</div>
  `;
};

const createEngineer = function (engineer) {
  return `
  <div class="card" style="width: 18rem">
  <div class="card-header">Engineer : <span>${engineer.name}</span></div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID : <span>${engineer.id}</span></li>
    <li class="list-group-item">Email : <span>${engineer.email}</span></li>
    <li class="list-group-item">Office Number : <span>${engineer.github}</span></li>
  </ul>
</div>
  `;
};

const createIntern = function (intern) {
  return `
  <div class="card" style="width: 18rem">
  <div class="card-header">Intern : <span>${intern.name}</span></div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID : <span>${intern.id}</span></li>
    <li class="list-group-item">Email : <span>${intern.email}</span></li>
    <li class="list-group-item">Office Number : <span>${intern.school}</span></li>
  </ul>
</div>
  `;
};

const header = function () {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Team</title>
      <link rel="stylesheet" href="./assets/css/style.css" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
    </head>
  
    <section>
      <nav class="nav"><div>MY TEAM</div></nav>
    </section>
  
    <main class="main">`;
};

const footer = () => `</main>

<body>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
    crossorigin="anonymous"
  ></script>
</body>
</html>`;

module.exports = {
  createManager,
  createEngineer,
  createIntern,
  header,
  footer,
};
