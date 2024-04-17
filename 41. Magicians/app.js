// Making an array containing megicians names
var magicians_names = ["David Blaine", "Teller", "Criss Angel"];
// Define a function that prints the name of each megician from an array
function show_magicians(megician) {
    megician.forEach(function (name) { return console.log(name); });
}
// calling the function to print each megician name
show_magicians(magicians_names);
