'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct number'

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 12
// console.log(document.getElementsByClassName('.number').textContent)

// let score = document.querySelector('.score').textContent = 15
// console.log(score)


// document.querySelector('.guess').value = 11
// let guess = document.querySelector('.guess').value 
// console.log(guess)

//event listener for the webpage to react to js based on events such as on click on hover and etc 

//select the element where the event should happen

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highScore = 0;
let secret = document.querySelector('.number').textContent = secretNumber
console.log(secret);

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.btn.check').addEventListener('click', () => {
    let guess = Number(document.querySelector('.guess').value);
    console.log(`type of input => ${typeof guess}`);
    console.log(`value => ${guess}`);

    if (!guess) {
        displayMessage('no number');
    } else if (guess === secretNumber) {
        score++
        document.querySelector('.score').textContent = score
        displayMessage('correct guess!...')
        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('.number').style.width = '250px'

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').
                textContent = highScore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'too high!...' : 'too low!...');
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'Game Over!...'
            document.querySelector('.score').textContent = 0
        }
    } else {
        document.querySelector('.message').textContent = 'guess again!...'
    }


})

document.querySelector('.btn.again').addEventListener('click', () => {
    location.reload()
});







