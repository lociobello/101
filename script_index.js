const ctaButton = document.getElementById("cta");
const vimeoContainer = document.getElementById("vimeo-container");
const overlay = document.getElementById("overlay");
const credit = document.getElementById("credit");

// Store the YouTube embed URL
const youtubeURL =
  "https://www.youtube.com/embed/rPIGJrrjlcw?si=3j82xB50ZlM485sP&autoplay=1&playsinline=1";

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
  overlay.style.backgroundColor = isExpanded ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)";
  overlay.style.cursor = isExpanded ? "zoom-out" : "default";

  // Add or remove the iframe to start/stop the video
  if (isExpanded) {
    vimeoContainer.innerHTML = `<iframe width="100%" height="100%" src="${youtubeURL}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    credit.style.opacity = 0; // Hide the credit when expanded
  } else {
    vimeoContainer.innerHTML = "";
    credit.style.opacity = 1; // Show the credit when collapsed
  }
}
