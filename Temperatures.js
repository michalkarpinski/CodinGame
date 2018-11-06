var N = parseInt(readline()); // the number of temperatures to analyse
var TEMPS = readline().split(' '); // the N temperatures expressed as integers ranging from -273 to 5526

var goal = 0;
var result = "";

if (N > 0) {
  TEMPS.sort(function (a, b) { return b - a });
  var result = TEMPS.reduce(function (prev, curr) {
    return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
  });
} else {
  result = 0;
}

print(result);
