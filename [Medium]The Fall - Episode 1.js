var inputs = readline().split(' ');
var W = parseInt(inputs[0]); // number of columns.
var H = parseInt(inputs[1]); // number of rows.

var LINE = [];
    
for (var i = 0; i < H; i++) {
    LINE[i] = readline(); // represents a line in the grid and contains W integers. Each integer represents one room of a given type.
}
var EX = parseInt(readline()); // the coordinate along the X axis of the exit (not useful for this first mission, but must be read).

// game loop
while (true) {
    var inputs = readline().split(' ');
    var XI = parseInt(inputs[0]);
    var YI = parseInt(inputs[1]);
    var POS = inputs[2];
    
    var room = LINE[YI].split(" ")[XI];
    var x = "";
    var y = "";

    switch(parseInt(room)) {
        case 0:
            break;
        case 1:
            y=1;
            break;
        case 2:
            POS=="LEFT"?x=1:x=-1;
            break;
        case 3:
            y=1;
            break;
        case 4:
            POS=="TOP"?x=-1:y=1;
            break;
        case 5:
            POS=="TOP"?x=1:y=1;
            break;
        case 6:
            POS=="LEFT"?x=1:x=-1;
            break;
        case 7:
            y=1;
            break;
        case 8:
            y=1;
            break;
        case 9:
            y=1;
            break;
        case 10:
            x=-1;
            break;
        case 11:
            x=1;
            break;
        case 12:
            y=1;
            break;
        case 13:
            y=1;
            break;
    }
    
    print((XI+x) + " " + (YI+y)); // One line containing the X Y coordinates of the room in which you believe Indy will be on the next turn.
}