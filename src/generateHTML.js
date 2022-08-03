// create Manager card
const generateManager = function (manager) {
    return `
    <div class="col-sm-6 col-md-4 mt-5 mb-5">
        <div class="card h-100">
            <div class="card-header bg-primary text-light">
                <h3>${manager.name}</h3>
                <h5>Manager <i class="fa-solid fa-list-check"></i></h5>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// create Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="col-sm-6 col-md-4 mt-5 mb-5">
        <div class="card h-100">
            <div class="card-header bg-primary text-light">
                <h3>${engineer.name}</h3>
                <h5>Engineer <i class="fa-solid fa-laptop-code"></i></h5>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}"  target="_blank">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// create Intern card 
const generateIntern = function (intern) {
    return `
    <div class="col-sm-6 col-md-4 mt-5 mb-5">
        <div class="card h-100">
            <div class="card-header bg-primary text-light">
                <h3>${intern.name}</h3>
                <h5>Intern <i class="fa-solid fa-graduation-cap"></i></h5>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

// push array to page 
generateHTML = (data) => {

    // array for cards 
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }

    }

    // join strings 
    const employeeCards = pageArray.join('')



    // return generated page
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;

}

// generate html page 
const generateTeamPage = function (employeeCards) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="../dist/styles.css">
      <link rel="icon" type="image/x-icon" href="./people-group-solid.svg">
  </head>
  <body>
      <header>
          <nav class="navbar bg-primary" id="navbar">
              <span class="navbar-brand text-light mb-0 h1 w-100 text-center" id="navbar-text">Team Profile <i class="fa-solid fa-people-group"></i></span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://kit.fontawesome.com/33f18caacf.js" crossorigin="anonymous"></script>

  </html>
`;
}

// export to index
module.exports = generateHTML; 