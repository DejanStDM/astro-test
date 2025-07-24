// ==========================================================================
// FAQ Toggle Functionality
// ==========================================================================

export function initFaqToggle() {
  const faqItems = document.querySelectorAll('[data-faq-item]');
  
  if (!faqItems.length) return;
  
  faqItems.forEach((item) => {
    const toggle = item.querySelector('[data-faq-toggle]');
    const answer = item.querySelector('[data-faq-answer]');
    
    if (!toggle || !answer) return;
    
    toggle.addEventListener('click', () => {
      const isExpanded = item.classList.contains('faq__item--expanded');
      
      // Close all other FAQ items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('faq__item--expanded');
          const otherToggle = otherItem.querySelector('[data-faq-toggle]');
          if (otherToggle) {
            otherToggle.setAttribute('aria-expanded', 'false');
          }
        }
      });
      
      // Toggle current item
      if (isExpanded) {
        item.classList.remove('faq__item--expanded');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('faq__item--expanded');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initFaqToggle);
