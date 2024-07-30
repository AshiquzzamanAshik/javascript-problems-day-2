// 5.Class Expressions Problem:-Create a class expression for a Circle with a method to calculate the circumference.

const Circle = class {
    constructor(radius) {
      this.radius = radius;
    }
  
    calculateCircumference() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  const myCircle = new Circle(4);
  console.log(myCircle.calculateCircumference()); // Outputs: 25.132741228718345