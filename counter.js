let value = document.getElementById('value');
let count = 0;

function updateDisplay() {
    value.textContent = count;
    
}

function more() {
    count += 1;
    updateDisplay();
    
}

function less() {
    count -= 1;
    updateDisplay();  
}

function reset() {
    count = 0;
    updateDisplay();
}

updateDisplay();
