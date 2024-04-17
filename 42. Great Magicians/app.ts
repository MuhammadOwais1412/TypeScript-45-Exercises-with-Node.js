// Making an array containing megicians names
let magicians_names: string[] = ["David Blaine", "Teller", "Criss Angel"];

// Define a function that prints the name of each megician from an array
function show_magicians(magician: string[]) {
  magician.forEach((name) => console.log(name));
}

// Define a function to modify the array using .map()
function make_great(magician: string[]) {
  return magician.map((name) => `The Great ${name}`);
}

// calling the make_great function to modify and save it in variable
let great_megicians = make_great(magicians_names);

// calling the show_magicians function that show the modified array
show_magicians(great_megicians);
