function convert() {
    let celsiusInput = document.getElementById('celsius').value;
    let fahrenheitInput = document.getElementById('fahrenheit').value;

    if (celsiusInput !== '') {
        let celsius = parseFloat(celsiusInput);
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    } else if (fahrenheitInput !== '') {
        let fahrenheit = parseFloat(fahrenheitInput);
        let celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = celsius.toFixed(2);
    } else {
        alert('Please enter a value to convert.');
    }
}
