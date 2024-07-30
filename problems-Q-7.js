
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} sing a song.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const myAnimal = new Animal('myAnimal');
  myAnimal.speak(); // Outputs: myAnimal sing a song.
  
  const myDog = new Dog('Hare Re Re Re', ' Humpty Dumpty Ho Ho Ho');
  myDog.speak();     // Outputs: Hare Re Re Re
  console.log(myDog.breed);  // Outputs:  Humpty Dumpty Ho Ho Ho