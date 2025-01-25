const ctaButton = document.getElementById("cta-btn");
const vimeoContainer = document.getElementById("vimeo-container");
const overlay = document.getElementById("overlay");

ctaButton.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent triggering overlay's click event
  toggleVimeo();
});

overlay.addEventListener("click", () => {
  if (vimeoContainer.classList.contains("expanded")) {
    toggleVimeo();
  }
});

function toggleVimeo() {
  vimeoContainer.classList.toggle("expanded");

  const isExpanded = vimeoContainer.classList.contains("expanded");
  overlay.style.backgroundColor = isExpanded ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)";
  overlay.style.cursor = isExpanded ? "zoom-out" : "default";
}
