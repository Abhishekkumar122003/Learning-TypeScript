// let creat the class which implement the interface

interface People {
    name:string;
    age:number;
}

class Manager implements People {
    name:string;
    age:number;  // this name, age must present in Manager class because it implement the People interface which has these
    
    // I can add extra thing here
    number?:number

    constructor(name:string, age: number, number:number) {
        this.name=name;
        this.age=age;
        this.number = number

    }
}

let user = new Manager("Jhon", 32, 29342903);
console.log(user.age)