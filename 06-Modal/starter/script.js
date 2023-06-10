'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');
const openModalButtons = document.querySelectorAll('.show-modal');

for (let i = 0; i < openModalButtons.length; i++) {
    openModalButtons[i].addEventListener('click', () => {
        modal.classList.remove('hidden');
        // modal.style.display = 'block'
        overlay.classList.remove('hidden');

    })

    const closeModal = () => {

    }

    closeModalButton.addEventListener('click', () => {
        modal.classList.add('hidden')
    })

    overlay.addEventListener('click', () => {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');

    })

    //keypress 

    document.addEventListener('keydown', (e) => {
        const keyProperty = e["key"];
        if (keyProperty === 'Escape' && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden')
            overlay.classList.add('hidden') 
        }
    })
} 