// here we learn how to give type in user define object 

type StringOrNumber = string | number;

type UserType  = {        // this is costum interface type 
    name:string,
    age:number
}

let user: UserType = {                // this is a run time object
    name:"hkirt",
    age:27
}


function greet(user: UserType) {
    console.log("hello " + user.name);
    console.log("Your age " + user.age);
}


greet(user);


// intersection or "INTERFACE" using "type"

interface Manager {
    name: string,
    age:number
}

interface Employee {
    name:string,
    department:string
}

type TeamLead = Manager & Employee

let users: TeamLead ={
    name:"hkirt",
    age:27,
    department:"R&D"
}