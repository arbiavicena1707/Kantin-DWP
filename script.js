const carousel = document.querySelector('#carouselExample');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
  isDown = false;
});

carousel.addEventListener('mouseup', () => {
  isDown = false;
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 3; // Adjust the scrolling speed
  if (walk > 0) {
    bootstrap.Carousel.getInstance(carousel).prev();
  } else {
    bootstrap.Carousel.getInstance(carousel).next();
  }
  isDown = false;
});
