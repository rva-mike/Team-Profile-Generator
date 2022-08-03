// using Manager constructor 
const Manager = require('../lib/Manager');

// create manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Mike', 8, 'mikelevydesign@gmail.com', 3);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// get role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Mike', 8, 'mikelevydesign@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 
