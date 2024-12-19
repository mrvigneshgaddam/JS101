let minNumber, maxNumber, targetNumber, attempts;
const setupDiv = document.getElementById('setup');
const gameplayDiv = document.getElementById('gameplay');
const messageElement = document.getElementById('message');
const attemptsElement = document.getElementById('attempts');

document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('submit-guess').addEventListener('click', checkGuess);
document.getElementById('reset-game').addEventListener('click', resetGame);

function startGame() {
    minNumber = parseInt(document.getElementById('min').value);
    maxNumber = parseInt(document.getElementById('max').value);

    if (isNaN(minNumber) || isNaN(maxNumber) || minNumber >= maxNumber) {
        alert('Please enter valid numbers (min should be less than max)');
        return;
    }

    targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    attempts = 0;
    
    setupDiv.style.display = 'none';
    gameplayDiv.style.display = 'block';
    
    document.getElementById('range-info').textContent = 
        `I'm thinking of a number between ${minNumber} and ${maxNumber}`;
    messageElement.textContent = '';
    updateAttempts();
}

function checkGuess() {
    const guessInput = document.getElementById('guess');
    const guess = parseInt(guessInput.value);
    
    if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
        showMessage(`Please enter a number between ${minNumber} and ${maxNumber}`, 'error');
        return;
    }

    attempts++;
    updateAttempts();

    if (guess === targetNumber) {
        showMessage('Congratulations! You guessed the number right! 🎉', 'success');
    } else if (guess < targetNumber) {
        showMessage(` ${guess} Too low! Try a higher number`,'hint');
    } else {
        showMessage(` ${guess} Too high! Try a lower number`, 'hint');
    }

    guessInput.value = '';
    guessInput.focus();
}

function showMessage(text, type) {
    messageElement.textContent = text;
    messageElement.className = `message ${type}`;
}

function updateAttempts() {
    attemptsElement.textContent = `Attempts: ${attempts}`;
}

function resetGame() {
    setupDiv.style.display = 'block';
    gameplayDiv.style.display = 'none';
    document.getElementById('min').value = '';
    document.getElementById('max').value = '';
    messageElement.textContent = '';
    attempts = 0;
    updateAttempts();
}