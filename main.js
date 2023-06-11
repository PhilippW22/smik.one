// INDEX AND ABOUTME SLIDER

let slideIndex = 1;
let touchStartX = 0;
let touchEndX = 0;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowLeft') {
    plusSlides(-1);
  } else if (event.code === 'ArrowRight') {
    plusSlides(1);
  }
});

document.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});

document.addEventListener('touchend', (event) => {
  touchEndX = event.changedTouches[0].clientX;
  handleSwipeGesture();
});

function handleSwipeGesture() {
  const swipeThreshold = 50;

  if (touchEndX < touchStartX - swipeThreshold) {
    plusSlides(1);
  } else if (touchEndX > touchStartX + swipeThreshold) {
    plusSlides(-1);
  }
}

setInterval(() => {
  plusSlides(1);
}, 5000);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}