// ==========================================================================
// Header Navigation Functionality
// ==========================================================================

export function initHeaderNavigation() {
  // Wait for DOM to be ready if called immediately
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeaderNavigationLogic);
  } else {
    initHeaderNavigationLogic();
  }
}

function initHeaderNavigationLogic() {
  const header = document.querySelector('.header');
  const hamburgerBtn = document.querySelector('[data-menu-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');
  const navCloseBtn = document.querySelector('[data-menu-close]');
  const navOverlay = document.querySelector('[data-nav-overlay]');
  const navLinks = document.querySelectorAll('.header__nav-link');
  const body = document.body;

  if (!header || !hamburgerBtn || !navMenu) return;

  // Open menu function
  function openMenu() {
    header.classList.add('menu-open');
    navMenu.classList.add('nav-open');
    if (navOverlay) navOverlay.classList.add('overlay-active');
    body.classList.add('menu-open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    
    // Focus management
    navCloseBtn?.focus();
    
    // Trap focus within the navigation
    trapFocus(navMenu);
  }

  // Close menu function
  function closeMenu() {
    header.classList.remove('menu-open');
    navMenu.classList.remove('nav-open');
    if (navOverlay) navOverlay.classList.remove('overlay-active');
    body.classList.remove('menu-open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    
    // Return focus to hamburger button
    hamburgerBtn.focus();
    
    // Remove focus trap
    removeFocusTrap();
  }

  // Toggle menu function
  function toggleMenu() {
    const isMenuOpen = header.classList.contains('menu-open');
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Event listeners
  hamburgerBtn.addEventListener('click', toggleMenu);
  
  if (navCloseBtn) {
    navCloseBtn.addEventListener('click', closeMenu);
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeMenu);
  }

  // Close menu when clicking on navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.classList.contains('menu-open')) {
      closeMenu();
    }
  });

  // Focus trap functionality
  let focusableElements = [];
  let firstFocusableElement = null;
  let lastFocusableElement = null;

  function trapFocus(container) {
    // Get all focusable elements within the container
    focusableElements = container.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    
    if (focusableElements.length === 0) return;
    
    firstFocusableElement = focusableElements[0];
    lastFocusableElement = focusableElements[focusableElements.length - 1];

    // Add event listener for tab key
    container.addEventListener('keydown', handleFocusTrap);
  }

  function handleFocusTrap(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    }
  }

  function removeFocusTrap() {
    if (navMenu) {
      navMenu.removeEventListener('keydown', handleFocusTrap);
    }
  }

  // Handle resize to close menu on larger screens
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && header.classList.contains('menu-open')) {
      closeMenu();
    }
  });

  // Prevent scroll when menu is open
  function preventScroll(e) {
    if (body.classList.contains('menu-open')) {
      e.preventDefault();
    }
  }

  // Add scroll prevention
  document.addEventListener('touchmove', preventScroll, { passive: false });
  document.addEventListener('wheel', preventScroll, { passive: false });
}
