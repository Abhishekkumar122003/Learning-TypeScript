
function Sum(a:number , b: number) : number {
    return a + b;
}

 /**
  * function func_Name(argu1: argu1Type , argu2 : argu2Type) : func_Name-Return-Type {
  *     return argu1 , argu2
  * }
  */


 // ex
 function isEven (num:number):boolean {
    if(num %2 == 0){
        return true;
    }else {
        return false;
    }
 }
 console.log(isEven(4));
 console.log(isEven(3));