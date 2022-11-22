const [w, h] = readline().split(' ').map(Number);
const measurementsX = [0, ...readline().split(' ').map(Number), w].sort((a, b) => b - a);
const measurementsY = [0, ...readline().split(' ').map(Number), h].sort((a, b) => b - a);

const pathsX = [];
const pathsY = [];
let squaresCount = 0;

measurementsX.forEach((x, i) => {
    for (let j = i; j < measurementsX.length; j++) {
        if (x - measurementsX[j] > 0) pathsX.push(x - measurementsX[j]);
    }
})

measurementsY.forEach((y, i) => {
    for (let j = i; j < measurementsY.length; j++) {
        if (y - measurementsY[j] > 0) pathsY.push(y - measurementsY[j]);
    }
})

pathsX.forEach(x => squaresCount += pathsY.filter(y => y === x).length)

console.log(squaresCount);
