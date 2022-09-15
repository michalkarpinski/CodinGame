let grid = '';
for (let i = 0; i < 3; i++) {
    grid = grid + readline();
}

console.error('===');
console.error(grid[0] + ' ' + grid[1] + ' ' + grid[2]);
console.error(grid[3] + ' ' + grid[4] + ' ' + grid[5]);
console.error(grid[6] + ' ' + grid[7] + ' ' + grid[8]);
console.error('===');

let comboToWin = -1;
let winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

for (const [winCombosIndex, combo] of winCombos.entries()) {
    let counter = 0;
    let counterDots = 0;

    for (const [comboIndex, elem] of combo.entries()) {
        if (grid[elem] === 'O' || grid[elem] === '.') {
            if (grid[elem] === '.') {
                counterDots++;
            }
            if (counterDots > 1) {
                break;
            }
            counter++;

            if (counter == 3) {
                console.error(winCombos[winCombosIndex]);
                comboToWin = winCombosIndex;
            }
        }
    }

    if (comboToWin > -1) break;
};

if (comboToWin > -1) {
    winCombos[comboToWin].forEach((item, index) => {
        grid = grid.substr(0, item) + 'O' + grid.substr(item + 1);

        console.error(item);
        console.error(grid);
    })

    let table = grid.match(/[\s\S]{1,3}/g) || [];
    console.log(table[0]);
    console.log(table[1]);
    console.log(table[2]);
} else {
    console.log(false);
}
