var N = parseInt(readline());
var Pi = [];
var output = null;
    
for (let i = 0; i < N; i++) {
    Pi[i] = parseInt(readline());
}

Pi.sort((a, b) => a-b);

Pi.reduce(function(prev, curr) {
    let math = Math.abs(prev - curr);
    output = (typeof output === 'number' && output < math) ? output : math;
        
    return curr;
});

print(output);
