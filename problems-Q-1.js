//1. ES6 Destructuring- Problem: You have an object representing a person. Use ES6 destructuring to extract the name and age properties.
const person = {
    name: "Ashiquzzaman",
    age: 23,
};

const { name, age } = person;

console.log(name); // Ashiquzzaman
console.log(age);  // 23

