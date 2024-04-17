// lower case
var personName = "Owais";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toUpperCase());
// titlecase
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
