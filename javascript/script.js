const target = document.querySelectorAll('[data-animacao]');
const animacaoclass = 'animacao';

function animeScroll() {
    const windowTop = window.pageYOffset;
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
          element.classList.add(animacaoclass);
        }

    console.log(element.offsetTop);
    })
}

window.addEventListener('scroll', function() {
    animeScroll();
})