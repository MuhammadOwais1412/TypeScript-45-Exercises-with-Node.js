// Making an array containing megicians names
let magicians_names: string[] = ["David Blaine", "Teller", "Criss Angel"];

// Define a function that prints the name of each megician from an array
function show_magicians(megician: string[]) {
  megician.forEach((name) => console.log(name));
}

// calling the function to print each megician name
show_magicians(magicians_names);
