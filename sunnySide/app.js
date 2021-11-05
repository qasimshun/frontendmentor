const hamburger = document.querySelector('.hamburger');
const triangle = document.querySelector('.triangle');
const navigationBar = document.querySelector('.navigation-bar');
function displaceElements() {
    navigationBar.classList.toggle('tranform');
    triangle.classList.toggle('transforming');
}
hamburger.addEventListener('click', displaceElements);