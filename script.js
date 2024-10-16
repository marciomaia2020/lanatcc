// Script para os botoes de navegação do slide
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");


}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
    sliderNav(i);
    });
});



//MENU RESPONSIVO
const menuBtn = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("show"); // Alterna a classe show
  });
  
//CARROSSEL LANÇAMENTO
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

