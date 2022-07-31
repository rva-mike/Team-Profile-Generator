// importing Engineer constructor 
const Engineer = require('../lib/Engineer');

// create engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Mike', 2, 'mikelevydesign@gmail.com', 'rva-mike');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// get github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Mike', 2, 'mikelevydesign@gmail.com', 'rva-mike');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// get role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Mike', 2, 'mikelevydesign@gmail.com', 'rva-mike');

    expect(engineer.getRole()).toEqual("Engineer");
});
