// 3.ES6 Classes Problem:-Create a class Rectangle with properties width and height and a method to calculate the area.

class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  const myRectangle = new Rectangle(7, 80);
  console.log(myRectangle.calculateArea()); // Outputs: 560