'use strict';

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const currentScore0 = document.getElementById('current--0')
const currentScore1 = document.getElementById('current--1')
let currentScore = 0;

diceEl.classList.add('hidden')

rollDice.addEventListener('click', () => {

    const dice = Math.trunc(Math.random() * 6) + 1

    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`

    // const images = document.querySelectorAll('img');
    // for (let i = 0; i < images.length; i++) {
    //     const img = images[i];
    //     const imgAttribute = img.getAttribute('src')
    //     if (imgAttribute === 'dice-1.png') {
    //         const currentScore = Number(document.querySelector('.score').textContent);
    //         currentScore = currentScore + 1;
    //     }
    // }

    if (dice !== 1) {

        currentScore += dice
        currentScore0.textContent = currentScore

    } else {
        //switch to the next player
    }
})

newGame.addEventListener('click', () => {
    diceEl.classList.add('hidden')
    score0.textContent = 0
    score1.textContent = 0
    currentScore0.textContent = 0
    currentScore1.textContent = 0


})

