const framePattern = readline() + " "; // the ASCII art pattern to use to frame the picture

const inputs = readline().split(' ');
const pictureHeight = parseInt(inputs[0]); // the height of the picture
const pictureWidth = parseInt(inputs[1]); // the width  of the picture

const picture = [];

for (let i = 0; i < pictureHeight; i++) {
    const line = readline(); // the ASCII art picture line by line
    picture.push(line);
}

for (let i = 0; i < framePattern.length; i++) {
    const currentChar = framePattern[framePattern.length - 1 - i];
    const row = currentChar.repeat(pictureWidth + i*2);
    picture.unshift(row);
    picture.push(row);

    for (let j = 0; j < picture.length; j++) {
        picture[j] = currentChar + picture[j] + currentChar;
    }
}

picture.forEach(row => console.log(row));