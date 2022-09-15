var letterWidth = parseInt(readline());
var letterHeight = parseInt(readline());
var text = readline().split('');

var ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ?";

for (let i = 0; i < letterHeight; i++) {
    let row = readline();
    let output = "";
    
    for (let char = 0; char < text.length; char++) {
        let charIndex = ABC.indexOf(text[char].toUpperCase()) * letterWidth;
        output += row.substr(charIndex, letterWidth);
    }
    
    print(output);
}
