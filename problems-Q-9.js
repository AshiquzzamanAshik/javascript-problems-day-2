// 9.Static Methods Problem:-Create a class MathUtil with a static method square to calculate the square of a number.

class MathUtil {
    static square(number) {
      return number * number;
    }
  }
  
  console.log(MathUtil.square(7));  // Outputs: 49
  console.log(MathUtil.square(5));  // Outputs: 25