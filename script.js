const home = document.querySelector(".homeEye");
const ballpit = document.querySelector(".ballpitEye");
const bedroom = document.querySelector(".bedroomEye");
const chapel = document.querySelector(".chapelEye");
const sunset = document.querySelector(".sunsetEye");
const isolation = document.querySelector(".isolationEye");
let dilated = false;

eyesArray = new Array(home, ballpit, bedroom, chapel, sunset, isolation).forEach(eye => {
  eye.addEventListener("mouseover", (e) => {
    dilated = true
    eye.src = eye.src.replace("blink", "dilated")
    eye.src = eye.src.replace("eye", "dilated")
  });
  eye.addEventListener("mouseout", (e) => {
    dilated = false
    eye.src = eye.src.replace("dilated", "eye")
  });
  timedBlink(eye)
});

// eye.addEventListener("mouseover", (e) => {
//   eye.src = "images/eye2.png";
// });

// eye.addEventListener("mouseout", (e) => {
//   eye.src = "images/eye1.png";
// });

function timedBlink(eye) {
  if (!dilated) {
    eye.src = eye.src.replace("blink", "eye")
    setTimeout(() => {
      blink(eye)
    }, (Math.random() * 20000))
  }
};

function blink(eye) {
  if (!dilated) {
    eye.src = eye.src.replace("eye", "blink")
    setTimeout(() => {
      timedBlink(eye)
    }, (Math.random() * 500))
  }
};