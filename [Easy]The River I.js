class River {
    constructor(x) {
        this.value = x;
    }
    
    calculateSum() {
        let digits = ("" + this.value).split("");
        let sum = 0;
        
        digits.forEach((item, index, array) => {
            sum += +item;
        });
        
        this.value += sum;
    }
}

let r1 = new River(parseInt(readline()));
let r2 = new River(parseInt(readline()));

console.error('r1: ' + r1.value);
console.error('r2: ' + r2.value);


while (r1.value != r2.value) {
    console.error('---');
    
    (r1.value > r2.value ? r2 : r1).calculateSum();
    
    console.error('r1: ' + r1.value);
    console.error('r2: ' + r2.value);
}

console.log(r1.value);
