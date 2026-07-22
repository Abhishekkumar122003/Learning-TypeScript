type keyInput = "up" | "down" | "left" | "right" ; // type is a way to provide the type->data which can be passed to the function  

//now i can also use "ENUS" for determining the value that are use to declear the type of the argument

enum Direction { // enum => i can iterate through the value inside it
    Up,
    Down,
    Left,
    Right
}


function doSomething(keyPressed: /**keyInput*/ Direction ){
    //do something
    if(keyPressed == Direction.Down){

    }
    // some more operation
}

doSomething(Direction.Down);
doSomething(Direction.Left);