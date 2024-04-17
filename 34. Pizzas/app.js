// Making an Array
var pizzas = ["Fajita", "Chicken Tikka", "Malai cheese"];
// print the array in the form of list using for loop
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var onePizza = pizzas_1[_i];
    console.log("I Like ".concat(onePizza, " Pizza"));
}
// print a message outside of for loop
console.log("I Love Pizza");
