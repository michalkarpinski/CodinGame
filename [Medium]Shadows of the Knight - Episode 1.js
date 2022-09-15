/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var W = parseInt(inputs[0]); // width of the building.
var H = parseInt(inputs[1]); // height of the building.
var N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
var X0 = parseInt(inputs[0]);
var Y0 = parseInt(inputs[1]);
var minX = 0;
var maxX = W-1;
var minY = 0;
var maxY = H-1;
var lastX = 0;
var lastY = 0;

// game loop
while (true) {
    var BOMB_DIR = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    var X = 0;
    var Y = 0;
    
    switch (BOMB_DIR) {
        case "U":
            Y = -1;
            break;
        case "UR":
            X = 1;
            Y = -1;
            break;
        case "R":
            X = 1;
            break;
        case "DR":
            X = 1;
            Y = 1;
            break;
        case "D":
            Y = 1;
            break;
        case "DL":
            X = -1;
            Y = 1;
            break;
        case "L":
            X = -1;
            break;
        case "UL":
            X = -1;
            Y = -1;
            break;
    }
    
    lastX = X;
    lastY = Y;
    
    if (X < 0) { // LEFT
        X = Math.ceil(Math.abs(X0 - minX) / 2);
        X *= -1;
        maxX = X0;
    }
    else if (X > 0) { // RIGHT
        X = Math.ceil((maxX - X0) / 2);
        minX = X0;
    }
    
    if (Y < 0) { // UP
        Y = Math.ceil(Math.abs(Y0 - minY) / 2);
        Y *= -1;
        maxY = Y0;
    }
    else if (Y > 0) { // DOWN
        Y = Math.ceil((maxY - Y0) / 2);
        minY = Y0;
    }
    
    printErr("W : " + W);
    printErr("H : " + H);
    printErr("N : " + N);
    printErr("X0 : " + X0);
    printErr("Y0 : " + Y0);
    printErr("X : " + X);
    printErr("Y : " + Y);
    printErr("maxX : " + maxX);
    printErr("maxY : " + maxY);

    N--;
    
    X0 += X;
    Y0 += Y;
    
    print(X0 + ' ' + Y0); // the location of the next window Batman should jump to.
}