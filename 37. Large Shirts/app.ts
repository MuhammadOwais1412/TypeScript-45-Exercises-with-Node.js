// Making a function

function make_shirt (size: string = "Large", printMessage: string = "I Love Typescript") {

    console.log(`Creating a ${size} size shirt with ${printMessage} printed on it`);
    
};

// Calling a function with by-default values

make_shirt();

// Calling a function with Medium size and by-default message

make_shirt("Medium");

// Calling a function with small size and different message

make_shirt("Small", "I Love Coding")