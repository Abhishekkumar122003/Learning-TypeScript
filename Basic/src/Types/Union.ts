type GoodUser = {
    name:string;
    gift:string;
}

type BadUser = {
    name: string;
    ip: string
}
type USer = GoodUser | BadUser;

// USer is of union of GoodUser and BadUser which mean they can have the properties
let user: USer = {
    name:"Harkirt",
    gift:"Iphone",
    ip: "asdml"
}

console.log(user);
//resume 1:12:00