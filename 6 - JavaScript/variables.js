console.log("Hello World!");

// This is a single-line comment
/* This is a
multi-line
comment
*/

//  let - mutable/changeable
let firstName = "Ansen";
console.log("Firstname: ", firstName);
firstName = "Eric";
console.log("Firstname: ", firstName);

// var - mutable/changeable
var lastName = "Doe";
console.log("Last Name: ", lastName);
lastName = "Smith";
console.log("Last Name: ", lastName);

// const - unmutable/unchangeable
const birthday = "01-24-1999";
console.log("Birthday: ", birthday);
// birthday = "02-12-1996" This will not work

if (true) {
  var email = "jamessmith123@gmail.com";
  let userName = "jamessmith";

  console.log(userName);
}
console.log(email);
console.clear();

// Primitive Data Types
// Strings - textual data enclosed in either '' or ""
let firstname = "Ferdinand";
console.log("First Name: ", firstname);
console.log("Type of first name: ", typeof firstname);
// typeof operator: determines the type of a variable (built-in operator)

// Number: represent numeric values (e.g 30 , -30 , 3.14)
let age = 30;
console.log("Age: ", age);
console.log("Type of age: ", typeof age);
let decimal = 3.14;
console.log("Decimal: ", decimal);
console.log("Type of decimal: ", typeof decimal);

// Boolean: Either true or false
let isStudent = false;
console.log("Is Student: ", isStudent);
console.log("Type of isStudent: ", typeof isStudent);

// Null: Intentional absence of value
let car = null;
console.log("Car: ", car);
console.log("Type of Car: ", typeof car);

// Undefined: Unintentional absence of value
// let city;
let city = undefined;
console.log("City: ", city);
console.log("Type of City: ", typeof city);

console.clear();

// Operators and Expression

// Arithmetic Operators
let num1 = 22;
let num2 = 5;
console.log("Addition (+):", num1 + num2);
console.log("Subtraction (-):", num1 - num2);
console.log("Multiplication (*):", num1 * num2);
console.log("Division (/):", num1 / num2);
console.log("Exponent (**):", num1 ** num2);
console.log("Modulo (%):", num1 % num2);

// Order of Operations
// PEMDAS - Parenthesis, Exponents, Multiplication and Division (same level), Addition and Subtraction (same level)

let num3 = 10;
let num4 = 5;
let num5 = 2;

console.log("Result: ", (num3 / num4) * num5);

let answer = 3 + (4 * (5 - 2) ** 2) / 2;
console.log("Result: ", answer);

// 2. String Expressions or Concatenation
let greeting = "Hi";
let myName = "Ansen";
console.log(greeting + " " + myName + "!");

// 3. Comparison Operators
// Equal Operator "==": check if the two values are equal
console.log("Equal to (==)", 5 == 5);
console.log("Equal to (==) with type coercion", 5 == "5");

// Not Equal to '!=': check if the two values are not equal
console.log("Not Equal to (!-):", 5 != 5);
console.log("Not Equal to (!=) with type coercion", 5 == "5");

// Strict Equal to '===': check if two values are equal in value and type
console.log("Strict Equal to (===):", 5 === 5);
console.log("Strict Equal to (===):", 5 === "5");

// Strict Not Equal to '!==': check if two values are not equal in value or type
console.log("Strict Not Equal to (!==):", 5 !== 5);
console.log("Strict Not Equal to (!==):", 5 !== "5");
console.log("Greater Than (>):", 5 > 3);
console.log("Less Than (<):", 3 < 5);
console.log("Greater Than or Equal (>=):", 5 >= 3);
console.log("Less Than or Equal (<=):", 3 <= 5);

console.clear();
let sunny = true;
let warm = true;
// AND: True only if all conditions are met
console.log("Is it sunny AND warm?", sunny && warm);

// OR: True only if at least one condition is met
console.log("Is it sunny AND warm?", sunny || warm);
// NOT: Inverts the boolean value
console.log("NOT sunny?", !sunny);

//5. Assignment Expression
// Assigning a value to a variable
let num7 = 10;
let num8 = 5;
// Addition Assignment +=
num7 += num8;
console.log(num7);
// Subtraction Assignment -=
// Computation - 15 - 5 = 10
num7 -= num8;
console.log(num7);
// Multiplication Assignment *=
// Computation = 10 * 5 = 50
num7 *= num8;
console.log(num7);
// Division Assignment /=
// Computation = 50 / 5 = 10
num7 /= num8;
console.log(num7);

// Exponent Assignment **=
// Computation = 10 ** 5 = 100000
num7 **= num8;
console.log(num7);
// Modulo/Remainder Assignment %=
// Computation = 100000 % 5 = 0
num7 %= num8;
console.log(num7);
