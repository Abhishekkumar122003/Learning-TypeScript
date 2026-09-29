// let creat the class which implement the interface

interface People {
    name:string;
    age:number;
}

class Manager implements People {
    name:string;
    age:number;

    constructor(name:string, age: number) {
        this.name=name;
        this.age=age
    }
}

let user = new Manager("Jhon", 32);
console.log(user.age)