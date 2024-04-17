var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making the array of places and print it in it's original order
var placesToVisit = ["China", "Denmark", "Brazil", "Argentina", "Japan"];
console.log("Original Order:", placesToVisit);
// Print the array in Alphabetical Order without modifying Original array list
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort());
// Showing that the array is still in it's original order
console.log("Still in it's original order:", placesToVisit);
// Print the array in Reverse Alphabetical Order without modifying Original array list
console.log("Reverse Alphabetical Order:", __spreadArray([], placesToVisit, true).sort().reverse());
// Showing that the array is still in it's original order
console.log("Still in it's original order:", placesToVisit);
// We have changed the original order of the array into Reversed
console.log("Original array Reversed", placesToVisit.reverse());
//  Print the array to show that it's come back to its original order
console.log("Back to Original Order", placesToVisit.reverse());
// print the array to show that it's original order has been changed into Alphabetical Order
console.log("Sorted in Alphabetical Order:", placesToVisit.sort());
// We have changed Alphabetical Order of the array into Reversed
console.log("Alphabetical Order Reversed", placesToVisit.reverse());
