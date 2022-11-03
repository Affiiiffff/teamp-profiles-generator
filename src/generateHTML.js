const createManager = function (manager) {
  return `
  <div class="card" style="width: 18rem">
  <div class="card-header">Manager:<span>${manager.name}</span></div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID<span>${manager.id}</span></li>
    <li class="list-group-item">Email<span>${manager.email}</span></li>
    <li class="list-group-item">Office Number<span>${manager.officeNumber}</span></li>
  </ul>
</div>
  `;
};

const createEngineer = function (engineer) {
  return `
  <div class="card" style="width: 18rem">
  <div class="card-header">Manager:<span>${engineer.name}.name}</span></div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID<span>${engineer.id}</span></li>
    <li class="list-group-item">Email<span>${manager.email}</span></li>
    <li class="list-group-item">Office Number<span>${engineer.github}</span></li>
  </ul>
</div>
  `;
};

const createIntern = function (intern) {
  return `
  <div class="card" style="width: 18rem">
  <div class="card-header">Manager:<span>${intern.name}</span></div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID<span>${intern.id}</span></li>
    <li class="list-group-item">Email<span>${intern.email}</span></li>
    <li class="list-group-item">Office Number<span>${intern.school}</span></li>
  </ul>
</div>
  `;
};
