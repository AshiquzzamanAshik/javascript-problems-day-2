// 8.New Target Operators Problem:-Use new.target to create an abstract class Shape that cannot be instantiated directly.

class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error("Cannot instantiate abstract class Shape.");
      }
    }
  
    calculateArea() {
      throw new Error("Method 'calculateArea()' must be implemented.");
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  try {
    const shape = new Shape();
  } catch (e) {
    console.error(e.message);   // Outputs: Cannot instantiate abstract class Shape.
  }
  
  const myCircle = new Circle(3);
  console.log(myCircle.calculateArea());     // Outputs: 28.274333882308138
  
  const myRectangle = new Rectangle(3, 7);
  console.log(myRectangle.calculateArea());  // Outputs: 21