let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    // Atualiza a posição atual
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Calcula o deslocamento
    const offset = -currentSlide * 25; // cada imagem ocupa 25%
    document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
}

// Para autoplay
setInterval(() => moveSlide(1), 10000000); // muda a cada 3 segundos
