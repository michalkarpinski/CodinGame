const r = parseInt(readline());

let answer = "NO";

function nextRiver(e) {
    for (let char of e.toString()) {
        e += +char;
    }
    return e;
}

for (let i = 0; i < r; i++) {
    if (nextRiver(i) == r) answer = "YES";
}

console.log(answer);