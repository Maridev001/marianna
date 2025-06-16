const track = document.querySelector('.carrusel-track');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const slides = document.querySelectorAll('.proyecto');

let index = 0;

const updateCarrusel = () => {
    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
};

nextBtn.addEventListener('click', () => {
    if (index < slides.length - 1) {
        index++;
        updateCarrusel();
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarrusel();
    }
});

window.addEventListener('resize', updateCarrusel);
