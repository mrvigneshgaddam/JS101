function converter() {
    const num = parseFloat(document.getElementById('val').value);
    const selected = document.getElementById('division').value;

    if (selected == 'cel') {
        document.getElementById('Result').innerText = `Fahrenheit: ${(num * (9 / 5) + 32).toFixed(2)}`;
        
    } else if (selected == 'fah') {
        document.getElementById('Result').innerText = `Celsius: ${((num - 32) * (5 / 9)).toFixed(2)}`;
        
    } else if (selected == 'rupee') {
        document.getElementById('Result').innerText = `Rupees: ${(num * 84).toFixed(2)}`;
        
    } else if (selected == 'dollar') {
        document.getElementById('Result').innerText = `Dollars: ${(num / 84).toFixed(2)}`;
        
    } else {
        document.getElementById('Result').innerText = "Please select a conversion format.";
        return;
    }
}
