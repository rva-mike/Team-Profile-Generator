// using Intern constructor 
const Intern = require('../lib/Intern');

// create intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Mike', 12, 'mikelevydesign@gmail.com', 'VCU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// get school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Mike', 12, 'mikelevydesign@gmail.com', 'VCU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// get role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Mike', 12, 'mikelevydesign@gmail.com', 'VCU');

    expect(intern.getRole()).toEqual("Intern");
}); 

