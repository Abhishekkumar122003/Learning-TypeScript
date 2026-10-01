type User = {
    name:string;
    age:number;
    greet:()=>{};
}

type StringOrNumber = number|string

function printId(id:StringOrNumber){
    console.log(id);
}

printId(1231);
printId("2123d")