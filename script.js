// ----------------- IMAGE GALLERY FOCUS ------------------

const galleryImages = document.querySelectorAll(".gallery-img");
const enlargedImageContainer = document.getElementById("enlarged-image-container");
const enlargedImage = document.getElementById("enlarged-image");
const closeButton = document.getElementById("close-button");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
let currentIndex;

// Event listener to open the enlarged image on click
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    displayEnlargedImage(index);
    updateArrowVisibility();
    enlargedImageContainer.style.display = "flex"; // Display the container
    setTimeout(() => {
      enlargedImageContainer.classList.add("show");
    }, 10);
    // Set cursor to zoom-out when outside the image
    enlargedImage.addEventListener("mouseleave", () => {
      document.body.style.cursor = "zoom-out";
    });
    // Set cursor to default when inside the image
    enlargedImage.addEventListener("mouseenter", () => {
      document.body.style.cursor = "default";
    });
    // Delay showing the arrows and close button with a fade-in effect
    setTimeout(() => {
      document.getElementById("arrow-left").style.opacity = "1";
      document.getElementById("arrow-right").style.opacity = "1";
      document.getElementById("close-button").style.opacity = "1";
    }, 300);
    // Disable scrolling on the page
    document.body.classList.add("no-scroll");
  });
});

// Event listener to close the enlarged image
closeButton.addEventListener("click", closeEnlargedImage);

// Event listener to close the enlarged image when clicking outside the image
enlargedImageContainer.addEventListener("click", (event) => {
  if (event.target === enlargedImageContainer) {
    closeEnlargedImage();
  }
});

function closeEnlargedImage() {
  // Reset cursor to default
  document.body.style.cursor = "default";
  // Remove class to hide the container with a fade-out transition
  enlargedImageContainer.classList.remove("show");

  // Hide the container after the transition
  setTimeout(() => {
    enlargedImageContainer.style.display = "none";
  }, 300);
  // Enable scrolling on the page
  document.body.classList.remove("no-scroll");
}

// Event listener to navigate to the previous image
arrowLeft.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    displayEnlargedImage(currentIndex);
    updateArrowVisibility();
  }
});

// Event listener to navigate to the next image
arrowRight.addEventListener("click", () => {
  if (currentIndex < galleryImages.length - 1) {
    currentIndex++;
    displayEnlargedImage(currentIndex);
    updateArrowVisibility();
  }
});

// Function to display the enlarged image at the given index
function displayEnlargedImage(index) {
  enlargedImage.src = galleryImages[index].src;
  enlargedImageContainer.style.display = "flex";
}

// Function to update arrow visibility based on the current index
function updateArrowVisibility() {
  arrowLeft.style.display = currentIndex === 0 ? "none" : "block";
  arrowRight.style.display = currentIndex === galleryImages.length - 1 ? "none" : "block";
}

//-------------- VIMEO APPEARS -------------------

const ctaButton = document.getElementById("cta-btn");
const vimeoContainer = document.getElementById("vimeo-container");

ctaButton.addEventListener("click", () => {
  vimeoContainer.style.width = "1000px";
});
