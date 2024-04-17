// Making a Array
var userName = ["Ali", "Usama", "Zeeshan", "Admin", "Saim"];
// printing a message one by one to each user using for each method and along with if-else statement
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
