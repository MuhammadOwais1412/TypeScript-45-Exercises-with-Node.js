// Define a function with a rest perameters that accept the item arguments representing our Sandwich

function makeSandwich(...items: string[]) {
  
    console.log("\nMaking a Sandwich with the following items:\n");
    
    items.forEach(item => console.log("-" + item));
    
    console.log("\nNow Enjoy Your Sandwich");
    
}

// Calling the function 3 times with 3 different number of arguments

makeSandwich("Chicken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Chicken", "Cheese", "Mayo", "Egg", "Tomato");


