const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('img');
let slideIndex = 0;

function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function slideNext() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function slidePrevious() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Show the initial slide at index 0
showSlide(0);

// Add event listeners for the navigation buttons
document.querySelector('.prev').addEventListener('click', slidePrevious);
document.querySelector('.next').addEventListener('click', slideNext);

