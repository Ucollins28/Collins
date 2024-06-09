function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const times = parseInt(document.getElementById('times').value);
    const years = parseInt(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(times) || isNaN(years)) {
        alert('Please fill in all fields with valid numbers');
        return;
    }

    const futureValue = principal * Math.pow((1 + rate / times), times * years);
    document.getElementById('futureValue').innerText = futureValue.toFixed(2);
}
