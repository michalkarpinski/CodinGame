const inputs = readline().split(' ');
const numeralWidth = parseInt(inputs[0]);
const numeralHeight = parseInt(inputs[1]);
var numerals = null;



// Functions
function readMayan() {
  var arr = [];
  for (let i = 0; i < numeralHeight; i++) {
    let line = readline();
    numerals = line.length / numeralWidth;

    for (let y = 0; y < numerals; y++) {
      let txt = line.substring(0, numeralWidth);
      if (i === 0)
        arr[y] = [];

      arr[y].push(txt);
      line = line.substring(numeralWidth);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].join(";");
  }

  return arr;
}

function readNumber() {
  const numberSize = readline();
  let sum = 0;
  let numbers = numberSize / numeralWidth;

  for (let i = numbers; i > 0; i--) {
    let arr = [];
    for (let i = 0; i < numeralWidth; i++) {
      arr[i] = readline();
    }
  
    arr = arr.join(";");
    sum += mayanASCII.indexOf(arr) * Math.pow(numerals, i - 1);
  }

  return sum;
}



// Reads
const mayanASCII = readMayan();
const number1 = readNumber();
const number2 = readNumber();
const operation = readline();



// Maths
var result = null;
switch (operation) {
  case "*":
    result = number1 * number2;
    break;
  case "/":
    result = number1 / number2;
    break;
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
}



// Prepare output
var output = [];
while (result > numerals) {
  const index = result % numerals;
  result = parseInt(result / numerals);
  
  output.push(mayanASCII[index].split(";"));
}

output.push(mayanASCII[result].split(";"));

output.reverse();



// Print
for (let i = 0; i < output.length; i++) {
  let numeral = output[i].slice(";");

  for (let j = 0; j < numeral.length; j++) {
    print(numeral[j]);
  }
}
