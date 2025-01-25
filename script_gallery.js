// ----------------- IMAGE GALLERY FOCUS ------------------

const galleryImages = document.querySelectorAll(".gallery-img");
const enlargedImageContainer = document.getElementById("enlarged-image-container");
const enlargedImage = document.getElementById("enlarged-image");
// const closeButton = document.getElementById("close-button");
// const arrowLeft = document.getElementById("arrow-left");
// const arrowRight = document.getElementById("arrow-right");
let currentIndex;
let scrollPosition = 0;

function displayEnlargedImage(index) {
  enlargedImage.src = galleryImages[index].src;
  enlargedImageContainer.style.display = "flex";
}

function enableGalleryEnlargement() {
  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      displayEnlargedImage(index);
      enlargedImageContainer.style.display = "flex";
      setTimeout(() => {
        enlargedImageContainer.classList.add("show");
      }, 10);
      enlargedImage.addEventListener("mouseenter", () => {
        document.body.style.cursor = "default";
      });
      scrollPosition = document.documentElement.scrollTop;
      document.body.style.setProperty("--st", -scrollPosition + "px");
      document.body.classList.add("no-scroll");
    });
  });

  enlargedImageContainer.addEventListener("mousemove", (event) => {
    const containerWidth = enlargedImageContainer.offsetWidth;
    const containerHeight = enlargedImageContainer.offsetHeight;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const imageRect = enlargedImage.getBoundingClientRect();

    if (mouseX < imageRect.left || mouseX > imageRect.right || mouseY < imageRect.top || mouseY > imageRect.bottom) {
      enlargedImageContainer.style.cursor = "zoom-out";
    } else if (mouseX < containerWidth / 2) {
      enlargedImageContainer.style.cursor = "w-resize";
    } else {
      enlargedImageContainer.style.cursor = "e-resize";
    }
  });

  enlargedImageContainer.addEventListener("click", (event) => {
    if (event.target === enlargedImageContainer) {
      closeEnlargedImage();
    }
  });

  enlargedImage.addEventListener("click", (event) => {
    event.stopPropagation();
    const containerWidth = enlargedImageContainer.offsetWidth;
    const clickX = event.clientX;
    if (clickX < containerWidth / 2 && currentIndex > 0) {
      currentIndex--;
    } else if (clickX >= containerWidth / 2 && currentIndex < galleryImages.length - 1) {
      currentIndex++;
    }
    displayEnlargedImage(currentIndex);
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
