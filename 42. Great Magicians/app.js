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
// calling the make_great function to modify and save it in variable
var great_megicians = make_great(magicians_names);
// calling the show_magicians function that show the modified array
show_magicians(great_megicians);
