// Making a variable

let age: number = 18;

// Creating the program for Determining the stage of life using else-if chain

if (age < 2){

    console.log("you are a Baby");
    
}

else if (age >= 2 && age < 4) {

    console.log("you are a Toddler");
    
}

else if (age >= 4 && age < 13) {

    console.log("you are a Kid");   

}

else if (age >= 13 && age < 20) {

    console.log("you are a Teenager");
    
}

else if (age >= 20 && age < 65) {

    console.log("you are a Adult");
    
}

else if (age >= 65) {

    console.log("you are an Elder");
    
}