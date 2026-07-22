type Input = String | Number;

function firstEl(arr: Input[]){

    return arr[0];

}
function secondEl(arr:String [] | Number[]){
    return arr[0]
}
const value = firstEl(["hrkirt" , "sigh"]);
const value1 = secondEl(["hrkirt" , "sigh"  ]);
// console.log(value1);

function identity<T>(arg:T[]):T{
    return arg[0];
}

const output1 = identity<string>(["string"]);
console.log(output1.toUpperCase())