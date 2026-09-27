let user:{
    name:string,
    age:number
} = {
    name:"hkirt",
    age:27
}


function greet(user:{
    name:string,
    age: number
}) {
    console.log("hello " + user.name);
    console.log("Your age " + user.age);
}


greet(user);
