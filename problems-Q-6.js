// 6.JavaScript Computed Properties Problem:-Create an object with computed property names based on variables.

const propName1 = 'firstName';
const propName2 = 'lastName';
const propName3 = 'age';

const person = {
  [propName1]: 'Ashiquzzaman',
  [propName2]: 'Ashik',
  [propName3]: 23
};

console.log(person.firstName); // Outputs: Ashiquzzaman
console.log(person.lastName);  // Outputs: Ashik
console.log(person.age);       // Outputs: 23