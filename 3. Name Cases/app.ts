// lower case
let personName: string = "Owais"
console.log("lowercase:", personName.toLowerCase());

// upper case
console.log("uppercase:", personName.toUpperCase());

// titlecase
console.log("titlecase:", personName.replace(/\bw/g,c=> c.toUpperCase()));