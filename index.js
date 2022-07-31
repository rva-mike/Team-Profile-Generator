// node modules 
const inquirer = require('inquirer');
const fs = require('fs'); 


// team files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// team array
const teamArray = []; 



// beginning of manager prompts 
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name.");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the manager's ID.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email.')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the manager's office number.")
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
        addEmployee();
    })
    
};


const addEmployee = () => {
    console.log(`
    ============================
    Adding employees to the team
    ============================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
    ])
    .then(employeeChoice => {
        // data for employee types 



        if(employeeChoice.role === 'Intern'){
          internInput()
        } else {
            engineerInput()
        }
        console.log(employeeChoice)
    })

};

const internInput = () => {
    //questions for intern

    return inquirer.prompt ([
         {
            type: 'input',
            name: 'name',
            message: "What is the name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name.");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
        
           
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Do you want to add more team members?',
            default: false
        }
    ])
    .then(internInput => {
        console.log(internInput)
        const  {name, id, email, school, confirmAddEmployee} = internInput; 
        const intern = new Intern (name, id, email, school);

        teamArray.push(intern); 
        // console.log(intern); 
        if(confirmAddEmployee){
            addEmployee();
        } else {
            console.log(teamArray)
            console.log(teamArray)
            const html = generateHTML(teamArray) 
            writeFile(html)
        }
        
    })
}


const engineerInput = () => {
    
    //questions for engineer
    return inquirer.prompt ([
         {
            type: 'input',
            name: 'name',
            message: "What is the name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name.");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's GitHub username.",
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Do you want to add more team members?',
            default: false
        }
    ])
    .then(engineerInput => {
        console.log(engineerInput)
        const  {name, id, email, github, confirmAddEmployee} = engineerInput; 
        const engineer = new Engineer (name, id, email, github);

        teamArray.push(engineer); 
        // console.log(intern); 
        if(confirmAddEmployee){
            addEmployee();
        } else {
            console.log(teamArray)
            const html = generateHTML(teamArray) 
            writeFile(html)
        }
        
    })
}

addManager()


// function to generate HTML page file using file system 
const writeFile = html => {
    fs.writeFile('./dist/index.html', html, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 
