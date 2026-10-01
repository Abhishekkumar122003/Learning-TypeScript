// let creat the class which implement the interface

interface People {
    name?:string;
    age:number;
    isLegal():boolean;
}

class Manager implements People {
    // name:string;
    // age:number;  // this name, age must present in Manager class because it implement the People interface which has these
    
    // I can add extra thing here
    number?:number

    constructor(
        public name:string,
        public age: number) 
        {
        this.name=name;
        this.age=age;
    
    }
    isLegal(): boolean {
        return this.age>= 18
    }
}


class God extends Manager {
    constructor(name:string , age:number){
        super(name, age)
    }
}



let user = new Manager("Jhon", 32);
console.log(user.isLegal())

let god = new God("god", 99999);
console.log(god.isLegal());
console.log(god, " hi there")