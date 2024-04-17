"use strict";
// Describe a function
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
// Calling a function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Mumbai", "India");
