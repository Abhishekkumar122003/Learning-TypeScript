interface UserType  {        // this is costum interface type 
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
