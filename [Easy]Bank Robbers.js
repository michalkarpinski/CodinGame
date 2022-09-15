const robbersNumber = parseInt(readline());
const vaultsNumber = parseInt(readline());
const robbers = Array(robbersNumber).fill(0);

const vaults = Array(vaultsNumber).fill('').map(x => {
    [C, N] = readline().split(' ');
    robbers[robbers.indexOf(Math.min(...robbers))] += Math.pow(10,N) * Math.pow(5,C-N);
});

console.log(Math.max(...robbers));
