// JavaScript for image slider
const images = [
    "image/image1.jpg",
    "image/image2.jpg",
    "image/image3.jpg",
    "image/image5.jpg"
  ];
  
  let currentIndex = 0;
  
  function showImage(index) {
    const slider = document.getElementById("slider");
    slider.innerHTML = `<img src="${images[index]}" alt="Slide ${index + 1}">`;
    adjustImageSize();
  }
  
  function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  }
  
  function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    showImage(currentIndex);
  }
  
  // Show the first image initially
  showImage(currentIndex);
  
  // Automatically change image every 5 seconds
  setInterval(nextImage, 5000);
  
  // Function to adjust image size to fit slider dimensions
  function adjustImageSize() {
    const slider = document.getElementById("slider");
    const image = slider.querySelector("img");
    if (image) {
      const sliderWidth = slider.offsetWidth;
      const sliderHeight = slider.offsetHeight;
      const imageWidth = image.naturalWidth;
      const imageHeight = image.naturalHeight;
      if (imageWidth / sliderWidth > imageHeight / sliderHeight) {
        // Image is wider than slider
        image.style.width = "100%";
        image.style.height = "auto";
      } else {
        // Image is taller than slider
        image.style.width = "auto";
        image.style.height = "100%";
      }
    }
  }
  