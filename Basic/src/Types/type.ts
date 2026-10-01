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
printId("2123d");

type Employee = {
    name:string;
    startDate:Date;
};

type Manager = {
    name:string;
    department:string;
}


let e:Employee = {
    name:"Jhonethan",
    startDate:new Date()
}
console.log(e.name);
console.log(e.startDate.toLocaleDateString())

let m:Manager = {
    name:"Adam",
    department:"R&D"
}
console.log(m);

