let current_users: string[] = ["ali", "Usama", "Zain", "Saqib", "Salman"];

let new_users: string[] = ["Hamza", "Zubair", "Ali", "Saim", "Usama"];

// Using foreach method to print the message to each user seperately
new_users.forEach(oneNew_user => {
    // Making a condition for new user name already exist in Current User array and save the condition in variable
    
    let our_condition = current_users.some(oneCurrent_user => oneCurrent_user.toLowerCase() === oneNew_user.toLowerCase())
    if (our_condition){

        console.log(`Sorry! ${oneNew_user} is already taken.`);
        
    }
    else {

        console.log(`username ${oneNew_user} is available.`);
        
    }
});