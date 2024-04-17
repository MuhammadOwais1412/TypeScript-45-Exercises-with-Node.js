
// Making a function to make a car object
function  make_car (manufacturer, model, ...options) {
    // initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    // Add Additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}



// Call the function to create a car object
let my_car = make_car("Toyota", "Corolla", "color:white", "Year:2024");

// Print the variable to ensure that all the information is stored correctly in the car object
console.log(my_car);
