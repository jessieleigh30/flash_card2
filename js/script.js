document.addEventListener('DOMContentLoaded', () => {
    let overlay = document.querySelector('.overlay');
    let cardArray = [];
    let frontCardInput = document.querySelector('#front-card-input');
    let backCardInput = document.querySelector('#back-card-input');

    // Flip Card Over
    // let card = document.querySelector('.card');
    // card.addEventListener('click', function() {
    //     card.classList.toggle('is-flipped');
    // })

    // OPEN AND CLOSE OVERLAY
    let openOverlay = document.querySelector('.add-card-button');
    let closeOverlay = document.querySelector('.close-overlay');
    openOverlay.addEventListener('click', () => {
        overlay.style.display = "flex";
        closeOverlay.addEventListener('click', () => {
            overlay.style.display = "none";
        });
    });

    // DELETE ALL CARDS
    let deleteCards = document.querySelector('.delete-cards');
    deleteCards.addEventListener('click', () => {
        alert('All cards removed!');
        cardArray = [];
    });

    // MAKE NEW CARD ON FORM SUBMIT
    let cardForm = document.querySelector('.add-card-form');
    cardForm.addEventListener('submit', () => {


    });

});