const N = parseInt(readline());
const H = N * 2;

for (let i = 1; i <= H; i++) {
    let line = "";
    
    // print " "
    for (let j = 0; j < (H-i); j++) {
        line += " ";
    }
    
    // print "*"
    let count = i * 2 - 1;
    for (let j = 0; j < count; j++) {
        if (i > N
            && j >= (i - N) * 2 - 1
            && j < H) {
            line += " ";
        } else {
            line += "*";
        }
    }
    
    // print "."
    if (i === 1) {
        line = "." + line.substring(1);
    }
    
    console.log(line);
}
