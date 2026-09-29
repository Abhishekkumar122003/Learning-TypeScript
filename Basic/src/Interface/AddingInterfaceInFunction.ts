interface People{
    name:string,
    age:number,
    greet:(name:string)=>string,
    greet2(name:string):string
}

let person: People = {
    name:"hrkirt",
    age:30,
    greet:(name)=>{
        return "hello " + name
    },
    greet2:(name)=>{
        return "How are you"
    }
}

console.log(person.greet(person.name)); 
console.log(person.name);
console.log(person.age);
console.log(person.greet(person.name));