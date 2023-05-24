const sliderItems = Array.from(document.querySelectorAll('.cont'));
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  sliderItems.forEach(item => {
    item.classList.remove('on');
  });
}

function showSlider() {
  sliderItems[currentSlide].classList.add('on');
}

function nextSlider() {
  hideSlider();
  currentSlide = (currentSlide + 1) % sliderItems.length;
  showSlider();
}

function prevSlider() {
  hideSlider();
  currentSlide = (currentSlide - 1 + sliderItems.length) % sliderItems.length;
  showSlider();
}

nextButton.addEventListener('click', nextSlider);
prevButton.addEventListener('click', prevSlider);

hideSlider();
showSlider();



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




