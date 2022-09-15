const SquareEdgeLenght = parseInt(readline());
const LightPower = parseInt(readline());

console.error("SquareEdgeLenght: " + SquareEdgeLenght);
console.error("LightPower: " + LightPower);

const SquereItems = Array.from(Array(SquareEdgeLenght), x => readline().split(' '));

// debug
const debug = () => {
    console.error("DEBUG:");
    SquereItems.forEach((item) => console.error(item));
    console.error("----------");
}
debug();


// Get candles posiotions
let candles = [];

SquereItems.forEach((row, rowIndex) => {
    row.forEach((col, colIindex) => {
        if (col === "C") {
            SquereItems[rowIndex][colIindex] = LightPower;
            candles.push({ x: colIindex, y: rowIndex });
        } else {
            SquereItems[rowIndex][colIindex] = 0;
        }
    });
});


// Set neigbors light
candles.forEach((item, index) => {
    for (let y = -LightPower; y < LightPower; y++) {
        for (let x = -LightPower; x < LightPower; x++) {
            let currentX = x + item.x;
            let currentY = y + item.y;

            if (currentX < 0 || currentY < 0 || currentX >= SquareEdgeLenght || currentY >= SquareEdgeLenght) {
                continue;
            }

            let distanceX = Math.abs(item.x - currentX);
            let distanceY = Math.abs(item.y - currentY);
            let currentLight = LightPower - Math.max(distanceX, distanceY);

            if (currentLight > 0 && SquereItems[currentY][currentX] < currentLight) {
                SquereItems[currentY][currentX] = currentLight;
            }
        }
    }
});

debug();


// Print result - The number of places with zero light.
const result = [].concat(...SquereItems).filter(item => item == 0).length;
console.log(result);