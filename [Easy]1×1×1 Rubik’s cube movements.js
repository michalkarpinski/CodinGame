/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const rotations = readline();
const face1 = readline();
const face2 = readline();

// Write an action using console.log()
// To debug: console.error('Debug messages...');

console.error(rotations);
console.error(face1);
console.error(face2);

let rotationsArray = rotations.split(" ");
let rotationsCount = rotationsArray.length;
let newFace1 = face1;
let newFace2 = face2;

let ROTATIONS = ["x", "x'", "y", "y'", "z", "z'"];
let FACES = {
    F: ["U", "D", "L", "R", "F", "F"], // x, x', y, y', z, z'
    B: ["D", "U", "R", "L", "B", "B"],
    
    U: ["B", "F", "U", "U", "R", "L"],
    D: ["F", "B", "D", "D", "L", "R"],
    
    L: ["L", "L", "B", "F", "U", "D"],
    R: ["R", "R", "F", "B", "D", "U"]
}


for (let i = 0; i < rotationsCount; i++) {
    let symbol = rotationsArray[i];
    let rotation = ROTATIONS.indexOf(symbol);
    
    newFace1 = FACES[newFace1][rotation];
    newFace2 = FACES[newFace2][rotation];
    
    console.error("-- STEP " + (i+1) + "/" + rotationsCount);
    console.error(symbol);
    console.error(newFace1);
    console.error(newFace2);
}

console.error("===");
console.log(newFace1);
console.log(newFace2);
