//-------------- VIMEO APPEARS -------------------

const ctaButton = document.getElementById("cta-btn");
const vimeoContainer = document.getElementById("vimeo-container");
const overlay = document.getElementById("overlay");

ctaButton.addEventListener("click", () => {
  vimeoContainer.classList.toggle("expanded");
  overlay.style.backgroundColor = vimeoContainer.classList.contains("expanded")
    ? "rgba(0, 0, 0, 0.8)"
    : "rgba(0, 0, 0, 0)";
});

// const ctaButton = document.getElementById("cta-btn");
// const vimeoContainer = document.getElementById("vimeo-container");
// const overlay = document.getElementById("overlay");

// ctaButton.addEventListener("click", () => {
//   vimeoContainer.classList.toggle("expanded");
//   updateOverlay();
// });

// overlay.addEventListener("click", () => {
//   if (vimeoContainer.classList.contains("expanded")) {
//     vimeoContainer.classList.remove("expanded");
//     updateOverlay();
//   }
// });

// function updateOverlay() {
//   overlay.style.backgroundColor = vimeoContainer.classList.contains("expanded")
//     ? "rgba(0, 0, 0, 0.8)"
//     : "rgba(0, 0, 0, 0)";
// }
