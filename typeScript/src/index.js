console.log("Hello via Bun!");
function greet(name) {
    console.log(name);
}
let x = 1; // here you don't tell what type is it but still the typescript know by looking that "x & y" looks like number
let y = 2; //this is called inference in typescrit
console.log(x + y, "hi there");
// Write a function first_element
// that takes a array as an input,
// returns the first element if it exists,
// if it doesn;t exists, then return null
let a = [4, 5, 6, 1];
function first_element(arr) {
    if (arr.length > 0) {
        return arr[0];
    }
    else {
        return null;
    }
}
console.log(first_element(a));
