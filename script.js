


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




