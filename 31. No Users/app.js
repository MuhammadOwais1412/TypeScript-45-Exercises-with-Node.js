// Making a Array
var userName = ["Ali", "Usama", "Zeeshan", "Admin", "Saim"];
// Remove all values from our array now our array is empty
userName = [];
// if statement for checking length of our array is empty
if (userName.length === 0) {
    console.log("We need to find some users!");
}
else {
    // if arry is nor empty
    // printing a message one by one to each user using for each method and along with if-else statement
    userName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
