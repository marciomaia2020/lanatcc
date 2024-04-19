document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
  
    function updateCarousel() {
      carouselContainer.style.transform = `translateX(-${currentIndex * (100 / carouselItems.length)}%)`;
    }
  
    function showNext() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      updateCarousel();
    }
  
    function showPrevious() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      updateCarousel();
    }
  
    prevButton.addEventListener('click', showPrevious);
    nextButton.addEventListener('click', showNext);
  });




  