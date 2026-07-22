//now i can also use "ENUS" for determining the value that are use to declear the type of the argument
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    //do something
    if (keyPressed == Direction.Down) {
    }
    // some more operation
}
doSomething(Direction.Down);
doSomething(Direction.Left);
