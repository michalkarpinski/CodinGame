var width = parseInt(readline());
var height = parseInt(readline());

var i = 0;
var j = 0;

line = new Array(height);
for (var y = 0; y < height; y++) {
    currentLine = readline();
    line[y] = new Array(width);
    for (var x = 0; x < width; x++) {
        line[y][x] = currentLine.split("")[x] == 0 ? x + " " + y : "-";
    }
}

function findNextX(x,y) {
    printErr("findNextX: " + x + ", " + y)
    while(x < width - 1){
        x++;
        if (line[y][x] != "-") { 
            return line[y][x];
        }
    }
    return '-1 -1';
}

function findNextY(x,y) {
    printErr("findNextY: " + x + ", " + y)
    while(y < height - 1){
        y++;
        if (line[y][x] != "-") { 
            return line[y][x];
        }
    }
    return '-1 -1';
}

while (true) {
        
    while (line[j][i] == "-") {
        printErr(line[j][i]);
        i++;
        if (i >= width) {
            i = 0;
            j++;
        }
    }
    
    current = line[j][i];
    right = findNextX(i,j);
    bottom = findNextY(i,j);
    
    print(current + ' ' + right + ' ' + bottom);
    
    i++;
    
        if (i >= width) {
            i = 0;
            j++;
        }
}