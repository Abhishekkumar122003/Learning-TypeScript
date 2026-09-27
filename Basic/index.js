"use strict";
// let x: number = 1;  // type inferencing
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(x);
// x =parseInt("kjsbf");
// console.log(x);
function greet(firstName) {
    console.log("Hello " + firstName);
}
function Sum(num1, num2) {
    return num1 + num2;
}
let ans = Sum(2, 4);
// console.log(Sum(2 , 4));
//Special type "any"
// let anyType : any;
// anyType="string";
// anyType=11;
function executefunc(funct) {
    setTimeout(funct, 1000);
}
function desplay() {
    console.log("Hi there");
}
executefunc(desplay);
//# sourceMappingURL=index.js.map