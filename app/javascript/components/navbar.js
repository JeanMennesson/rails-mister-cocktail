function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.navbar-wagon');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-wagon-white'),
        navbar.classList.add('navbar-wagon-title');
      } else {
        navbar.classList.remove('navbar-wagon-white'),
        navbar.classList.remove('navbar-wagon-title');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
