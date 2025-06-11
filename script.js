const makeChange = (amount) => {
    let change = {
        q: 0,
        d: 0,
        n: 0,
        p: 0
    };

    // Calculate quarters
    change.q = Math.floor(amount / 25);
    amount %= 25; // Update amount to remaining cents

    // Calculate dimes
    change.d = Math.floor(amount / 10);
    amount %= 10; // Update amount to remaining cents

    // Calculate nickels
    change.n = Math.floor(amount / 5);
    amount %= 5; // Update amount to remaining cents

    // The remaining amount is in pennies
    change.p = amount;

    return change;
};

document.getElementById('calculate').addEventListener('click', () => {
    const amount = parseInt(document.getElementById('amount').value);
    if (amount > 0 && amount < 100) {
        const result = makeChange(amount);
        document.getElementById('result').innerText = JSON.stringify(result);
    } else {
        document.getElementById('result').innerText = "Please enter a valid amount between 1 and 99.";
    }
});