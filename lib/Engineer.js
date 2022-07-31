// importing Employee constructor 
const Employee = require("./Employee");

// engineer constructor extending employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    // return github from input 
    getGithub () {
        return this.github;
    }

     // change employee role to engineer
    getRole () {
        return "Engineer";
    }
}

// export
module.exports = Engineer; 
