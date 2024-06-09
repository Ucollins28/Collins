function convertCurrency() {
    const dollarInput = document.getElementById('dollarInput').value;
    const exchangeRate = 1450; // Example exchange rate, adjust as needed

    if (dollarInput === '' || isNaN(dollarInput)) {
        alert('Please enter a valid amount in dollars.');
        return;
    }

    const nairaAmount = dollarInput * exchangeRate;
    document.getElementById('result').innerText = `₦${nairaAmount.toFixed(2)}`;
}
