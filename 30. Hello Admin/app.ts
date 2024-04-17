// Making a Array
let userName:  string[] = ["Ali", "Usama", "Zeeshan", "Admin", "Saim"];

// printing a message one by one to each user using for each method and along with if-else statement
userName.forEach (oneUser => {
    if (oneUser === "Admin"){

        console.log(`Hello ${oneUser}, would you like to see a status report?`);
        
    }
    else {

        console.log(`Hello ${oneUser}, thank you for logging in again.`);
        
    }
});