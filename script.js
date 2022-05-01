let counter = 0;
let duped = 0;
const eye = document.querySelector(".eye");
const container = document.querySelector(".container");

eye.addEventListener("mouseover", (e) => {
  eye.src = "images/eye2.png";
});

eye.addEventListener("mouseout", (e) => {
  eye.src = "images/eye1.png";
  if (counter == 2 && duped == 0) {
    const img = document.createElement("img");
    img.src = "images/eye1.png";
    img.classList.add("eye");
    container.appendChild(img);
    duped = 1;
  } else {
    counter += 1;
    console.log(counter);
  }
});
