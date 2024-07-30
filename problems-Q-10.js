// 10.Symbol Problem:-Create an object with a symbol as a property key and demonstrate accessing it.

const uniqueSymbol = Symbol('uniqueProperty');
const myObject = {
  [uniqueSymbol]: 'This is a unique value'
};
console.log(myObject[uniqueSymbol]); // Outputs: This is a unique value

for (const key in myObject) {
  console.log(key);  // No output
}

console.log(Object.keys(myObject)); // Outputs: []
console.log(Object.getOwnPropertyNames(myObject)); // Outputs: []

const symbols = Object.getOwnPropertySymbols(myObject);
console.log(symbols);       // Outputs: [ Symbol(uniqueProperty) ]
console.log(myObject[symbols[0]]);    // Outputs: This is a unique value