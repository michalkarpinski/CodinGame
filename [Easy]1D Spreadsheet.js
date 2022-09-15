const N = parseInt(readline());
let inputs = Array(N).fill(null).map(x => readline().split(' '));

const operations = {
    VALUE: arg1 => arg1,
    ADD: (arg1, arg2) => (arg1 + arg2) + 0,
    SUB: (arg1, arg2) => (arg1 - arg2) + 0,
    MULT: (arg1, arg2) => (arg1 * arg2) + 0,
};

const handleArg = (arg) => {
    if (arg[0] === '$') {
        return output[arg.slice(1)] === undefined ? null : +output[arg.slice(1)];
    } else {
        return +arg;
    }
}

let output = [];
let repeat = false;
do {
    repeat = false;
    for (let i = 0; i < N; i++) {
        if (output[i] !== undefined) continue;

        const operation = inputs[i][0];
        const arg1 = handleArg(inputs[i][1]);
        const arg2 = handleArg(inputs[i][2]);

        if (arg1 === null || arg2 === null) {
            repeat = true;
            continue;
        }

        output[i] = operations[operation](arg1, arg2);
    }
} while (repeat === true);

output.forEach(value => console.log(value));