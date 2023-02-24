function generateIndex(employees) {
    console.log (employees);
  
      return `<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
        <title>Team Profile Generator</title>
      </head>
      
      <body>
        <h1 class="text-center py-4 bg-danger">Meet the Team!</h1>
        <div class="container d-flex p-2 justify-content-evenly">
        ${generateHtml(employees)}
        </div>
                      
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/dayjs@1.11.3/dayjs.min.js"
      integrity="sha256-iu/zLUB+QgISXBLCW/mcDi/rnf4m4uEDO0wauy76x7U=" crossorigin="anonymous"></script>
                      
      </body>
                      
    </html>`;
  }
  
  function generateHtml(employees) {
    const employeeHTML = employees.map(employee => {
      switch (employee.role) {
        case 'Manager':
        return `<div class="card d-flex m-4" style="width: 18rem;">
        <div class="card-body">
          <div class="p-3 mb-2 bg-primary text-white bg-gradient">
            <h5 class="card-title">${employee.name}</h5>
            <h6 class="card-subtitle mb-2 text-white">${employee.role}</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item border">ID #: ${employee.id}</li>
            <li class="list-group-item border">Email: <a href="url">${employee.email}</a></li>
            <li class="list-group-item border">Office #: ${employee.office}</li>
          </ul>
        </div>
      </div>`
      case 'Engineer':
        return `<div class="card d-flex m-4" style="width: 18rem;">
        <div class="card-body">
          <div class="p-3 mb-2 bg-primary text-white bg-gradient">
            <h5 class="card-title">${employee.name}</h5>
            <h6 class="card-subtitle mb-2 text-white">${employee.role}</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item border">ID #: ${employee.id}</li>
            <li class="list-group-item border">Email: <a href="url">${employee.email}</a></li>
            <li class="list-group-item border">GitHub Account: <a href="url">github.com/${employee.github}</a></li>
          </ul>
        </div>
      </div>`
      case 'Intern':
        return `<div class="card d-flex m-4" style="width: 18rem;">
        <div class="card-body">
          <div class="p-3 mb-2 bg-primary text-white bg-gradient">
            <h5 class="card-title">${employee.name}</h5>
            <h6 class="card-subtitle mb-2 text-white">${employee.role}</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item border">ID #: ${employee.id}</li>
            <li class="list-group-item border">Email: <a href="url">${employee.email}</a></li>
            <li class="list-group-item border">School: ${employee.school}</li>
          </ul>
        </div>
      </div>`
      default: 
      return;
      }
    });
    return employeeHTML;
  }
  
  module.exports = generateIndex;