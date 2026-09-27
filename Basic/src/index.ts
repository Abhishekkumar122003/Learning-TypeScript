// let x: number = 1;  // type inferencing

// console.log(x);

// x =parseInt("kjsbf");

// console.log(x);

function greet(firstName : string) {
    // console.log("Hello " + firstName);
}

function Sum(num1 : number , num2 : number): number {
    return num1 + num2;
}

// let ans = Sum(2,4);
// console.log(Sum(2 , 4));
//Special type "any"

// let anyType : any;

// anyType="string";
// anyType=11;


function executefunc(funct: () => void) {
    setTimeout(funct , 1000);
}

function desplay(){
    // console.log("Hi there");
}
// executefunc(desplay);


// how to pass the function which return some type inside the function 

function sub(a: number , b: number) {
    return (a-b);
}

function takesFunction(fn: (x:number , z:number) => number) {
    setTimeout(fn , 2000);
}
console.log(takesFunction(() => sub(3, 2)));