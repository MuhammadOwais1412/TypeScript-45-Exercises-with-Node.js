var current_users = ["ali", "Usama", "Zain", "Saqib", "Salman"];
var new_users = ["Hamza", "Zubair", "Ali", "Saim", "Usama"];
// Using foreach method to print the message to each user seperately
new_users.forEach(function (oneNew_user) {
    // Making a condition for new user name already exist in Current User array and save the condition in variable
    var our_condition = current_users.some(function (oneCurrent_user) { return oneCurrent_user.toLowerCase() === oneNew_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry! ".concat(oneNew_user, " is already taken."));
    }
    else {
        console.log("username ".concat(oneNew_user, " is available."));
    }
});
