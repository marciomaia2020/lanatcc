//Script para os botoes de navegação do slide
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

/*
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
      // Exemplo de validação simples
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;

      if (nome === "" || email === "") {
          alert("Por favor, preencha todos os campos.");
          event.preventDefault();
      }
  });
});*/

