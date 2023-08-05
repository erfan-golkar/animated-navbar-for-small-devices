// open-close button animation
let linesContainer = document.getElementsByClassName("lines-container")[0];
linesContainer.onclick = function() {
  linesContainer.classList.toggle("changeMenuBtn");
}

// close phone menu -- width 260px
linesContainer.onclick = function() {
document.getElementsByClassName("phone-sidebar")[0].style.width = "260px";
}

let closeSign = document.getElementsByClassName("close-sign")[0];
closeSign.onclick = function() {
  document.getElementsByClassName("phone-sidebar")[0].style.width = "0";
}