// Making an Array
var petAnimals = ["Cat", "Dog", "Rabbit"];
// printing a message with each value of array using for loop
for (var _i = 0, petAnimals_1 = petAnimals; _i < petAnimals_1.length; _i++) {
    var Animal = petAnimals_1[_i];
    console.log("A ".concat(Animal, " would make a great pet"));
}
// printing a message outside of the for loop
console.log("Any of these animals would make a great pet!");
