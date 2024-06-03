// script.js

document.addEventListener('DOMContentLoaded', function() {
    const stars = Array.from({ length: 20 }, createStar);
    stars.forEach(star => document.body.appendChild(star));
});

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 5}px`;
    star.style.height = star.style.width;
    star.style.backgroundColor = 'white';
    return star;
}
