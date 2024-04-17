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

// Inform that only two guests can be invited for the dinner
console.log("Unfortunately! new dinner table won’t arrive in time for the dinner. so I can invite only two people for dinner.");

// Using while loop  to remove the guests from guestlist array untill two guests remain in the list
while(guestlist.length > 2) {
    let Removeguests = guestlist.pop();
    console.log(`Sorry, ${Removeguests} I can't invite you to dinner`);
    
}

// Sending a invitation Message to last two remaining guests
console.log("Invitation to the last two guests");

guestlist.forEach(invitedguests => console.log(`hello ${invitedguests} you are still invited to dinner` ));

// Remove the last two guests from the list
guestlist.pop();
guestlist.pop();

// printing the empty list
console.log("Empty list:", guestlist);
