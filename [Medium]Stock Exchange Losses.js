var n = parseInt(readline());
var vs = readline().split(" ").map( Number );
var top = 0;
var bottom = 0;
var output = 0;

printErr("vs: " + vs.length);
    
for (i=0 ; i < vs.length ; i++) {
    if (vs[i] > top) {
        top = vs[i];
        bottom = vs[i];
    } else {
        bottom = vs[i];
    }
    
    if (top - bottom > output) {
        output = top - bottom;
    }
}

if (output > 0) {
    print(output * -1);
} else {
    print(output);
}
