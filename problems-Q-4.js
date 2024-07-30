// 4.Getter and Setter in ES6 Problem:-Create a class Person with a getter and setter for the fullName property.

class Person {
    constructor(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
  
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this._firstName = firstName;
      this._lastName = lastName;
    }
  }
  
  const person = new Person('Ashiquzzaman', 'Ashik');
  console.log(person.fullName);   // Outputs: Ashiquzzaman Ashik
  
  person.fullName = 'Ashiquzzaman Sumon';
  console.log(person.fullName);   // Outputs: Ashiquzzaman Sumon
  console.log(person._firstName); // Outputs: Ashiquzzaman
  console.log(person._lastName);  // Outputs: SUmon