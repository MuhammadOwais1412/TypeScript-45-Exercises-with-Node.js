// Define a function with a rest perameters that accept the item arguments representing our Sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a Sandwich with the following items:\n");
    items.forEach(function (item) { return console.log("-" + item); });
    console.log("\nNow Enjoy Your Sandwich");
}
// Calling the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Chicken", "Cheese", "Mayo", "Egg", "Tomato");
