const inputs = readline().split(' ');
const W = parseInt(inputs[0]);
const H = parseInt(inputs[1]);

let lines = [];

for (let i = 0; i < H; i++) {
    lines.push(readline());
    console.error(lines[i]);
}

for (let i = 0; i < lines[0].length; i++) {
    if (lines[0][i] == " ") continue;
    
    let source = i;
    let destination = i;
    
    for (let j = 1; j < (lines.length - 1); j++) {
        if (lines[j][destination-1] == "-") {
            destination -= 3;
        } else if (lines[j][destination+1] == "-") {
            destination += 3;
        }
    }
    
    console.log(lines[0][source] + lines[lines.length - 1][destination]);
}
