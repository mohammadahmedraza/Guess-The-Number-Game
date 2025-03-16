let targetNumber = Math.floor(Math.random() * 100) + 1;
let lives = 3;
const guessInput = document.getElementById('guess');
const messageDiv = document.getElementById('message');
const gameOverDiv = document.getElementById('game-over');
const heartsDiv = document.querySelector('.hearts p');
const restartButton = document.getElementById('restartbutton');
const submitButton = document.getElementById('submitguess');

// Update hearts display based on lives
function updateHearts() {
    heartsDiv.textContent = '❤️ '.repeat(lives);
}

// Handle guess submission
submitButton.addEventListener('click', () => {
    const guess = parseInt(guessInput.value);
    
    if (!guess || guess < 1 || guess > 100) {
        messageDiv.textContent = 'Please enter a number between 1 and 100.';
        return;
    }
    
    if (guess === targetNumber) {
        messageDiv.textContent = '🎉 Congratulations! You guessed the correct number!';
        submitButton.disabled = true;
    } else {
        lives--;
        updateHearts();
        if (lives === 0) {
            messageDiv.textContent = 'Sorry! You have no lives left.';
            gameOverDiv.style.display = 'block';
            submitButton.disabled = true;
        } else {
            messageDiv.textContent = guess > targetNumber ? 'Too high! Try again.' : 'Too low! Try again.';
        }
    }
});

// Restart the game
restartButton.addEventListener('click', () => {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    lives = 3;
    guessInput.value = '';
    messageDiv.textContent = '';
    gameOverDiv.style.display = 'none';
    submitButton.disabled = false;
    updateHearts();
});

// Initialize hearts on page load
updateHearts();

