// creating a guestlist array
let guestlist = ["Zubair", "Asif", "Noman", "Siraj"];

// Making a variable for those guest who can't come
let notcoming = guestlist[0];

// print a name of the guest who can't come
console.log(notcoming, "is not coming");

// Add or Remove values from guestlist array
guestlist.splice(0, 1, "Amir");

// printing a Message 
console.log("Good News ! we have found a bigger table for dinner");

// Adding a new value at the beginning of the array
guestlist.unshift("Ali");

// Adding a new value at the ending of the array
guestlist.push("Zain");

// Get a middle index value of guestlist array
let middleindex: number = Math.floor(guestlist.length / 2);

// Adding a new value at the Middle of the array
guestlist.splice(middleindex, 0, "Usama");

// print a Message of updated list
console.log("updated list of our guests");

// sending a invitation to our guest one by one with their names
guestlist.forEach(guest => console.log(`hello ${guest}, would you like to dinner with me`));

