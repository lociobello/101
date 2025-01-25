// ----------------- IMAGE GALLERY FOCUS ------------------

const galleryImages = document.querySelectorAll(".gallery-img");
const enlargedImageContainer = document.getElementById("enlarged-image-container");
const enlargedImage = document.getElementById("enlarged-image");
const closeButton = document.getElementById("close-button");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
let currentIndex;
let scrollPosition = 0;

function displayEnlargedImage(index) {
  enlargedImage.src = galleryImages[index].src;
  enlargedImageContainer.style.display = "flex";
}

function updateArrowVisibility() {
  arrowLeft.style.display = currentIndex === 0 ? "none" : "block";
  arrowRight.style.display = currentIndex === galleryImages.length - 1 ? "none" : "block";
}

function enableGalleryEnlargement() {
  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      displayEnlargedImage(index);
      updateArrowVisibility();
      enlargedImageContainer.style.display = "flex";
      setTimeout(() => {
        enlargedImageContainer.classList.add("show");
      }, 10);
      enlargedImage.addEventListener("mouseleave", () => {
        document.body.style.cursor = "zoom-out";
      });
      enlargedImage.addEventListener("mouseenter", () => {
        document.body.style.cursor = "default";
      });
      setTimeout(() => {
        document.getElementById("arrow-left").style.opacity = "1";
        document.getElementById("arrow-right").style.opacity = "1";
        document.getElementById("close-button").style.opacity = "1";
      }, 300);
      scrollPosition = document.documentElement.scrollTop;
      document.body.style.setProperty("--st", -scrollPosition + "px");
      document.body.classList.add("no-scroll");
    });
  });

  closeButton.addEventListener("click", closeEnlargedImage);

  enlargedImageContainer.addEventListener("click", (event) => {
    if (event.target === enlargedImageContainer) {
      closeEnlargedImage();
    }
  });

  arrowLeft.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      displayEnlargedImage(currentIndex);
      updateArrowVisibility();
    }
  });

  arrowRight.addEventListener("click", () => {
    if (currentIndex < galleryImages.length - 1) {
      currentIndex++;
      displayEnlargedImage(currentIndex);
      updateArrowVisibility();
    }
  });
}

function disableGalleryEnlargement() {
  galleryImages.forEach((img) => {
    img.replaceWith(img.cloneNode(true));
  });
}

function handleResize() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    disableGalleryEnlargement();
  } else {
    enableGalleryEnlargement();
  }
}

window.addEventListener("resize", handleResize);
handleResize();

function closeEnlargedImage() {
  document.body.style.cursor = "default";
  enlargedImageContainer.classList.remove("show");
  setTimeout(() => {
    enlargedImageContainer.style.display = "none";
  }, 300);
  document.body.classList.remove("no-scroll");
  document.documentElement.scrollTop = scrollPosition;
}
