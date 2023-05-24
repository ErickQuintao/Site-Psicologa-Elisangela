const carousel = document.querySelector('.container-slider');
const slides = carousel.querySelector('.cont');
const prevBtn = document.getElementById('prev-button');
const nextBtn = document.getElementById('next-button');

let slideWidth = carousel.clientWidth;
let slideIndex = 0;

function moveSlides() {
  slides.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
}

function slidePrev() {
  slideIndex = slideIndex > 0 ? slideIndex - 1 : slides.childElementCount - 1;
  moveSlides();
}

function slideNext() {
  slideIndex = slideIndex < slides.childElementCount - 1 ? slideIndex + 1 : 0;
  moveSlides();
}

prevBtn.addEventListener('click', slidePrev);
nextBtn.addEventListener('click', slideNext);





document.querySelectorAll('.linksrapidos a').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var targetId = this.getAttribute('href');
    var targetElement = document.querySelector(targetId);
    if (targetElement) {
      var targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    }
  });
});




