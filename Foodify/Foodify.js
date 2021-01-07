const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');


for (let card of cards) {
    card.addEventListener("click", function() {
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = card.querySelector('img').src
        modalOverlay.querySelector("h1").textContent = card.querySelector('h1').textContent
        modalOverlay.querySelector("p").textContent = card.querySelector('p').textContent

    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    
})