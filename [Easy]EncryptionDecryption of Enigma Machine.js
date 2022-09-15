const operation = readline();
const pseudoRandomNumber = parseInt(readline());
const rotors = Array(3).fill(null).map(x => readline());
const message = readline();
const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let output = message.split('');

switch (operation) {
    case 'ENCODE':
        output = output.map((char, index) => abc[(abc.indexOf(char) + pseudoRandomNumber + index) % abc.length]);
        rotors.forEach(rotor => {
            output = output.map(char => rotor[abc.indexOf(char)]);
        });
        break;

    case 'DECODE':
        rotors.reverse().forEach(rotor => {
            output = output.map(char => abc[rotor.indexOf(char)]);
        });
        output = output.map((char, index) => {
            const x = ((abc.indexOf(char) - pseudoRandomNumber - index)) % abc.length;

            if (x === -1) {
                return abc.slice(x);
            } else {
                return abc.slice(x, x + 1);
            }
            
            //const x = ((abc.indexOf(char) - pseudoRandomNumber - index)) % abc.length;
            //if (x < 0) {
            //    return abc.charAt(abc.length - Math.abs(x));
            //} else {
            //    return abc.charAt(x);
            //}
        });
        break;
}
console.log(output.join(''));