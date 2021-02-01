const age = 4;  //  only 0 will show false 
if (age) {
    console.log("Condition is true");
} else {
    console.log("Condition is false");
}

const name = "Tom Cruise"; // "" empty string will show false
if (name.length) {
    console.log("Condition is true");
} else {
    console.log("Condition is false");
}

const value = NaN; // null and Nan is also show false
if (value) {
    console.log("Condition is true");
} else {
    console.log("Condition is false");
}
// Truthy '0', ' ', []
// Falsy 0, "", undefined, null, NaN