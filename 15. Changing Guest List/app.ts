let guestlist = ["Zubair", "Asif", "Noman", "Siraj"];

let notcoming = guestlist[0];

console.log(notcoming, "is not coming");

guestlist.splice(0, 1, "Amir");

guestlist.forEach(guest => console.log(`hello ${guest} would you like to dinner with me?`));