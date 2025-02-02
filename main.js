

// Toggle menu pour mobile
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navList.classList.toggle('active');
});

// Fermer le menu lorsqu'un lien est cliqué
navList.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navList.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".activity-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            alert(`Vous avez sélectionné l'activité : ${card.querySelector("h3").textContent}`);
        });
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change d'image toutes les 3 secondes
}
