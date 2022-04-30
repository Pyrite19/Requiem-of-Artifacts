const eye = document.querySelector('#eye');

eye.addEventListener('mouseover', (e) => {
    eye.src = "images/eye2.png";
});

eye.addEventListener('mouseout', (e) => {
    eye.src = "images/eye1.png";
});