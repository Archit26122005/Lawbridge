// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const header = document.getElementById('header');
  
  // Toggle mobile menu
  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    
    // Change icon based on menu state
    if (mobileMenu.classList.contains('hidden')) {
      menuToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      `;
      menuToggle.setAttribute('aria-label', 'Open menu');
    } else {
      menuToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      `;
      menuToggle.setAttribute('aria-label', 'Close menu');
    }
  });
  
  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      menuToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      `;
      menuToggle.setAttribute('aria-label', 'Open menu');
    });
  });
  
  // Header scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      header.classList.remove('bg-transparent', 'py-5');
      header.classList.add('bg-background/95', 'backdrop-blur-sm', 'shadow-md', 'py-3');
      
      // Change nav link colors on scroll
      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach(link => {
        link.classList.remove('text-white', 'hover:text-cream');
        link.classList.add('text-text-color', 'hover:text-primary');
      });
    } else {
      header.classList.add('bg-transparent', 'py-5');
      header.classList.remove('bg-background/95', 'backdrop-blur-sm', 'shadow-md', 'py-3');
      
      // Revert nav link colors
      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach(link => {
        link.classList.add('text-white', 'hover:text-cream');
        link.classList.remove('text-text-color', 'hover:text-primary');
      });
    }
  });
  
  // Form validation
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
      let isValid = true;
      
      // Simple validation
      if (!nameInput.value.trim()) {
        isValid = false;
        nameInput.classList.add('border-red-500');
      } else {
        nameInput.classList.remove('border-red-500');
      }
      
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        isValid = false;
        emailInput.classList.add('border-red-500');
      } else {
        emailInput.classList.remove('border-red-500');
      }
      
      if (!messageInput.value.trim()) {
        isValid = false;
        messageInput.classList.add('border-red-500');
      } else {
        messageInput.classList.remove('border-red-500');
      }
      
      if (isValid) {
        // In a real application, you would send the form data to a server here
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
      }
    });
  }
  
  // Helper function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
