export function initClientTestimonialsSlider() {
  const initSlider = () => {
    // Find the testimonials swiper container first
    const swiperContainer = document.querySelector('.client-testimonials__swiper');

    if (!swiperContainer) {
      console.warn('Client testimonials swiper container not found');
      return;
    }

    // Check if Swiper is available from CDN
    if (typeof Swiper === 'undefined') {
      console.error('Swiper library not loaded. Please include Swiper from CDN.');
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

  const waitForSwiper = () => {
    // Check if both DOM and Swiper are ready
    if (document.readyState === 'complete' && typeof Swiper !== 'undefined') {
      initSlider();
    } else if (typeof Swiper !== 'undefined') {
      // Swiper is loaded but DOM might not be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSlider);
      } else {
        initSlider();
      }
    } else {
      // Swiper not loaded yet, wait a bit longer
      setTimeout(waitForSwiper, 50);
    }
  };

  // Start the waiting process
  waitForSwiper();
}
