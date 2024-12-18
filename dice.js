let num1 = 0;
let num2 = 0;

function Throws1() {
    num1 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("number1").textContent = `Dice: ${num1}`;
}

function Throws2() {
    num2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("number2").textContent = `Dice: ${num2}`;
}

function calculateWinner() {
    let winnerText;
    if (num1 > num2) {
        winnerText = "Player 1 is the Winner!";
    } else if (num1 < num2) {
        winnerText = "Player 2 is the Winner!";
    } else {
        winnerText = "It's a Draw!";
    }
    document.getElementById("winner").textContent = winnerText;
}
123