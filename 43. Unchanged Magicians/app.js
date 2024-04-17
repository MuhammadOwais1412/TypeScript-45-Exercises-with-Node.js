// Making an array containing megicians names
var magicians_names = ["David Blaine", "Teller", "Criss Angel"];
// Define a function that prints the name of each megician from an array
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Define a function to modify the array using .map()
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
// Making a Copy of Original array using .slice() function
var copy_magicians_names = magicians_names.slice();
// Store the Copied arry in make_great funtion to include "The Great" with thier names
var copied_array = make_great(copy_magicians_names);
// Show both array original and copied
// Original
console.log("Original Array\n");
show_magicians(magicians_names);
// Copied
console.log("\nCopied Array\n");
show_magicians(copied_array);
