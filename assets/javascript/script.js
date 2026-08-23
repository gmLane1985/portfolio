const copyrightYear = document.querySelector('#copyright-year');

if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}

const carousel = document.querySelector('.about-carousel');

if (carousel) {
  const track = carousel.querySelector('.carousel-track');
  const images = carousel.querySelectorAll('.carousel-image');
  const dots = carousel.querySelector('.carousel-dots');
  let currentSlide = 0;
  let autoAdvance;

  const updateCarousel = () => {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.querySelectorAll('.carousel-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
      dot.setAttribute(
        'aria-current',
        index === currentSlide ? 'true' : 'false',
      );
    });
  };

  const restartAutoAdvance = () => {
    clearInterval(autoAdvance);
    autoAdvance = setInterval(() => {
      currentSlide = (currentSlide + 1) % images.length;
      updateCarousel();
    }, 5000);
  };

  const selectSlide = (slideIndex) => {
    currentSlide = slideIndex;
    updateCarousel();
    restartAutoAdvance();
  };

  images.forEach((image, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'carousel-dot';
    dot.setAttribute('aria-label', `Show photo ${index + 1}`);
    dot.addEventListener('click', () => {
      selectSlide(index);
    });
    dots.append(dot);
  });

  carousel.querySelector('.carousel-previous').addEventListener('click', () => {
    selectSlide((currentSlide - 1 + images.length) % images.length);
  });

  carousel.querySelector('.carousel-next').addEventListener('click', () => {
    selectSlide((currentSlide + 1) % images.length);
  });

  updateCarousel();
  restartAutoAdvance();
}
