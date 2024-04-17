// Define variable
var apple = "apple";
var upperCaseApple = "APPLE";
var ten = 10;
var twenty = 20;
// Making an array
var fruits = ["apple", "banana", "orange"];
// Tests for equality and inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");
// Tests using the lower case function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLocaleLowerCase() == apple);
console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLocaleLowerCase() != apple);
// Numerical tests
// equality and inequality
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
//  greater than and less than
console.log("\nIs ten is greater than zero?");
console.log(10 > 0);
console.log("\nIs twenty is less than ten?");
console.log(20 < 10);
//  greater than or equal to
console.log("\nIs ten is greater than or equal to five?");
console.log(ten >= 5);
//  less than or equal to
console.log("\nIs twenty is less than or equal to ten?");
console.log(twenty <= ten);
// Test using "and" and "or" operators
// using && (and)
console.log("\nIs twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\nIs twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
// using || (or)
console.log("\nIs twenty is greater than 30 or twenty is equal to 20");
console.log(20 > 30 || 20 == 20);
console.log("\nIs twenty is greater than 30 or twenty is not equal to 20");
console.log(20 > 30 || 20 != 20);
// Test whether an item is include in a array
console.log("\nIs orange includes in my fruits array");
console.log(fruits.includes("orange"));
// Test whether an item is not include in a array
console.log("\nIs orange is not includes in my fruits array");
console.log(!fruits.includes("orange"));
