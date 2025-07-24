export function initClientTestimonialsSlider() {
  // Use a longer delay to ensure Swiper is loaded from CDN
  const initSlider = () => {
    // Check if Swiper is available from CDN
    if (typeof Swiper === 'undefined') {
      console.error('Swiper library not loaded. Please include Swiper from CDN.');
      return;
    }

    // Find the testimonials swiper container
    const swiperContainer = document.querySelector('.client-testimonials__swiper');

    if (!swiperContainer) {
      console.warn('Client testimonials swiper container not found');
      return;
    }

    try {
      // Initialize Swiper
      const swiper = new Swiper('.client-testimonials__swiper', {
        // Mobile first configuration
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        centeredSlides: false,

        // Responsive breakpoints
        breakpoints: {
          // When window width is >= 768px (tablet)
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          // When window width is >= 992px (desktop)
          992: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        },

        // Navigation arrows
        navigation: {
          nextEl: '.client-testimonials__arrow--next',
          prevEl: '.client-testimonials__arrow--prev',
        },

        // Add some additional options for better UX
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },

        // Enable keyboard navigation
        keyboard: {
          enabled: true,
        },
      });

      console.log('Client testimonials slider initialized successfully');
    } catch (error) {
      console.error('Error initializing client testimonials slider:', error);
    }
  };

  // Try multiple initialization methods to ensure it works
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSlider);
  } else {
    // Document is already loaded
    initSlider();
  }

  // Also try with a small delay to ensure CDN scripts are loaded
  setTimeout(initSlider, 100);
}
