// declearing the object type using INTERFACE

interface UserType  {
    name:string;
    age:number;
    address: Adderess
}

interface Adderess {         // here "?" depict that either this adderess section exists or not, which means it is Optional
         city?:string;      // optional parameter
         country?:string;
         pincode?: number;
         HouseNumber?:number;
    };



let user: UserType = {
    name:"Harkirt",
    age:29,
    address:{
        city:"gurugram",
        country:"India",
        pincode:234242
    }
}

function isLegal(user : UserType) : boolean {
    if(user.age >= 18) {
        return true;
    }else{
        return false;
    }
}

const ans = isLegal(user);
if(ans){
    console.log("I can vote");
}else{
    console.log("I can't vote");
}

interface UserType2  {
    name:string;
    age:number;
    address?: Adderess
}

let user2:UserType2 = {
    name:"hrkirt",
    age:29,          // see no complian are given by the typescript compilar for not using the rest of "KEY-> adderess" , 
    address:{
        pincode:2342
    }
}

