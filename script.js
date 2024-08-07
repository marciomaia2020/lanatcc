/*let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}


document.addEventListener("DOMContentLoaded", function() {
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const carousel = document.querySelector(".carousel");

  let currentIndex = 0;

  nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % carousel.children.length;
      updateCarousel();
  });

  prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
      updateCarousel();
  });

  function updateCarousel() {
      const slideWidth = carousel.children[0].offsetWidth;
      carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  }
});*/


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
});


/*HEADER*/
window.addEventListener("scroll", function(){
  let header = document.querySelector('#header')
  header.classList.toggle('rolagem', window.scrollY > 0)
})