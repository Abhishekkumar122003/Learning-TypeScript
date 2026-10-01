abstract class User {
    name : string;
    constructor (name: string) {
        this.name= name;
    }

    abstract greet(): string;
    // we can also make defoult class
    hello(){
        console.log("hi there");
    }
}

class Employee extends User {
    name: string
    constructor( name:string){
        super(name);
        this.name= name
    }
    greet(): string {
        return  "hi " +this.name 
    }
}
let employee = new Employee("JHON");
console.log(employee)