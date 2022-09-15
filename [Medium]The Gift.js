// Variables declaration
const amount = +readline();     // the number of participants
const price = +readline();      // the price of the gift
var priceRemaining = price;     // the remaining cost of the gift
var budget = [];                // array of participants budgets
var budgetTotal = 0;            // the sum of the budgets

// Read participants budget
for (let i = 0; i < amount; i++) {
    budget[i] = +readline();
    budgetTotal += budget[i];
}

// Sort participants budget array (asc)
budget.sort((a, b) => a - b);

// Main
if (budgetTotal < price) {      // total budget is less than the price of the gift
    print('IMPOSSIBLE');
} else {
    for (let i = 0; i < budget.length; i++) {
        let avg = Math.floor(priceRemaining / (budget.length - i));
        let contribution = Math.min(budget[i], avg);
        priceRemaining -= contribution;
        print(contribution);
    }
}