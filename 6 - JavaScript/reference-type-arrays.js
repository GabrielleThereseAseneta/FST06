// Array
let fruits = ["Apple", "Pineapple", "Banana", "Pear", "Avocado"];
console.log("Fruits:", fruits);

// Check the length of an Array
console.log("Fruits length:", fruits.length);

// Update element/s
fruits[3] = "Dates";
console.log("Updated fruits:", fruits);

// Accessing Elements
console.log("3rd fruit:", fruits[2]);

// Method - function that is associate with an object or a class.
// Adding element
// .push() method - add element at the end of the array
fruits.push("Dewberries");
console.log("Updated fruits:", fruits);

// Deleting element
// .pop() method - delete element at the end of the array
fruits.pop();
console.log("Updated fruits:", fruits);

// Searching element/s
// .includes() method - check if an element exists
console.log("Is Banana included?", fruits.includes("Banana"));

// .indexOf() method - find the index of an element
let index = fruits.indexOf("Banana");
console.log("Index is:", index);

// .forEach () method - recievesa a function as an argument and execute it once for each array elements.
// Return:  undefined
fruits.forEach(function (fruit) {
  console.log("Fruits:", fruit);
});
