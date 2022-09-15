const ii = parseInt(readline());
const size = parseInt(readline());
const abc = "abcdefghijklmnopqrstuvwxyz";

let arr = [];
arr[0] = [size];
arr[1] = [size]; // CW
arr[2] = [size]; // CW x2
arr[3] = [size]; // CCW (CW x3)

for (let i = 0; i < size; i++) {
    let line = readline().split("");
    arr[0][i] = line;
}

function rotateCW(arr) {
    let newArr = [];
    
    for(let i = 0; i < size; i++) {
        for(let j=0; j < size; j++) {
            let index = j;
            let index2 = (size - 1) - i;
            
            if (typeof(newArr[index]) != "object") {
                newArr[index] = [];
            }
            
            newArr[index][index2] = arr[i][j];
        }
    }
    
    return newArr;
}

arr[1] = rotateCW(arr[0]);
arr[2] = rotateCW(arr[1]);
arr[3] = rotateCW(arr[2]);

let str = [];
str[0] = arr[0].join().replace(/,/g , "");;
str[1] = arr[1].join().replace(/,/g , "");;
str[2] = arr[2].join().replace(/,/g , "");;
str[3] = arr[3].join().replace(/,/g , "");;

let pos = 0;
let index = 0;
let history = [];

for (let i = 1; i < ii; i++) {
    let step = "" + index + "-" + pos;
    
    if (history.indexOf(step) > -1) {
        let indexof = history.indexOf(step);
        let loop = history.length - indexof;
        let remaining = (ii - (indexof + 1)) % loop;
        
        index = history[indexof + remaining].split("-")[0];
        pos = history[indexof + remaining].split("-")[1];
        
        break;
    }
    
    let char = str[index][pos];
    let move = abc.indexOf(char) + 1;
    
    if (char == "#") {
        i--;
        index++;
        if (index > 3) index = 0;
    } else if (char == "@") {
        i--;
        index--;
        if (index < 0) index = 3;
    } else {
        history.push(step);
    }
    
    pos += move;
    
    if (pos > (size*size-1)) {
        pos -= size*size;
    }
}

console.log(str[index][pos]);

