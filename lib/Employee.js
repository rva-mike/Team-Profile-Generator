// employee constructor 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // returns name from input
    getName () {
        return this.name;
    }

    // returns ID from input
    getId () {
        return this.id;
    }   

    // returns email from input
    getEmail () {
        return this.email;
    }

    // returns employee type 
    getRole () {
        return 'Employee'; 
    }
};

// export
module.exports = Employee; 