const N = parseInt(readline());
let highestPoints = 0;

let words = [];
for (let i = 0; i < N; i++) {
    words[i] = {
        word: readline(),
        disabled: null,
        points: null
    };
}

const LETTERS = readline().slice();

for (var i = 0; i < words.length; i++) {
    let currentWord = words[i].word;
    words[i].points = 0;
    if (currentWord.length > 7) continue;
    
    // remove duplicated letters
    currentWord = currentWord.split('').sort().join('');
    currentWord = currentWord.replace(/[\s\S](?=([\s\S]+))/g, function(c, s) {
        return s.indexOf(c) + 1 ? '' : c;
    });
        
    for (let j = 0; j < currentWord.length; j++) {
        let currentChar = currentWord[j];
        
        // set disabled
        let charAvailable = LETTERS.indexOf(currentChar);
        if (charAvailable === -1) {
            words[i].points = 0;
            break;
        }
        
        // calculate points
        if (["e", "a", "i", "o", "n", "r", "t", "l", "s", "u"].indexOf(currentChar) !== -1) {
            words[i].points += 1;
        } else if (["d", "g"].indexOf(currentChar) !== -1) {
            words[i].points += 2;
        } else if (["b", "c", "m", "p"].indexOf(currentChar) !== -1) {
            words[i].points += 3;
        } else if (["f", "h", "v", "w", "y"].indexOf(currentChar) !== -1) {
            words[i].points += 4;
        } else if (["k"].indexOf(currentChar) !== -1) {
            words[i].points += 5;
        } else if (["j", "x"].indexOf(currentChar) !== -1) {
            words[i].points += 8;
        } else if (["q", "z"].indexOf(currentChar) !== -1) {
            words[i].points += 10;
        }
    }
    
    if (words[i].points > highestPoints) {
        highestPoints = words[i].points;
    }
}

let result;
for (var i = 0; i < words.length; i++) {
    if (words[i].points === highestPoints) {
        if (typeof(result) === "undefined" || words[i].word.length < words[result].word.length) {
            result = i;
        }
    }
}

console.log(words[result].word);
