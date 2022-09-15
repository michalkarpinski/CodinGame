var firstNumber = parseInt(readline());
var destinationLine = parseInt(readline());

var line = [];
line[1] = firstNumber;

printErr("[Err]firstNumber: " + firstNumber);
printErr("[Err]destinationLine: " + destinationLine);
printErr("[Err]---");

function addNumber(number, count) {
    return count + " " + number + " ";
}

for (let i=2; i <= destinationLine; i++) { // start at second line
    
    let previousLine = String(line[i-1]);
    let previousLineArr = previousLine.split(' ');
    
    let lastNumber = null;
    let count = 0;
    line[i] = "";
    
    for (let y = 1; y <= previousLineArr.length; y++) {
        let currentNumber = previousLineArr[y-1];
        
        if (currentNumber != lastNumber) {
            if (y != 1) {
                line[i] += addNumber(lastNumber, count);
            }
            lastNumber = currentNumber;
            count = 0;
        }
        
        count++;
        
        if (y == previousLineArr.length) {
            line[i] += addNumber(lastNumber, count);
        }
    };
    
    line[i] = line[i].trim();
    
    printErr("[Err]line[" + i + "]: " + line[i]);
}

print(line[destinationLine]);