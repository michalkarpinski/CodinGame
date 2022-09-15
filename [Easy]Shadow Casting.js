const N = parseInt(readline());

const pattern = [];
for (let i = 0; i < N; i++) {
    pattern[i] = readline().split('');
}

const patternLength = pattern.length;

for (let i = patternLength - 1; i >= 0; i--) {
    if (pattern[i + 1] === undefined) pattern[i + 1] = [];
    if (pattern[i + 2] === undefined) pattern[i + 2] = [];

    const currentRow = pattern[i];
    const darkerRow = pattern[i + 1];
    const lighterRow = pattern[i + 2];

    for (let j = 0; j < currentRow.length; j++) {
        const currentChar = currentRow[j];

        if (currentChar != ' ') {
            if (darkerRow[j + 1] === ' ' || darkerRow[j + 1] === undefined) {
                darkerRow[j + 1] = '-';
            }
            if (lighterRow[j + 2] === ' ' || lighterRow[j + 2] === undefined) {
                lighterRow[j + 2] = '`';
            }
        }
    }
}

pattern.forEach(line => {
    line = Array.from(line, item => item || ' ');
    console.log(line.join(""));
});