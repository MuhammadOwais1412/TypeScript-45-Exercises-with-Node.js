var guestlist = ["Zubair", "Asif", "Noman", "Siraj"];
var notcoming = guestlist[0];
console.log(notcoming, "is not coming");
guestlist.splice(0, 1, "Amir");
guestlist.forEach(function (guest) { return console.log("hello ".concat(guest, " would you like to dinner with me?")); });
