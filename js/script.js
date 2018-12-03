document.addEventListener('DOMContentLoaded', () => {
let addNewCardButton = document.querySelector('.add-new-card');
let overlay = document.querySelector('.new-card-overlay');
let closeOverlay = document.querySelector('.close-menu');

addNewCardButton.addEventListener('click', () => {
    overlay.style.display = "flex";
    closeOverlay.addEventListener('click', () => {
        overlay.style.display = "none";
    });
});



}); // END DOM Function