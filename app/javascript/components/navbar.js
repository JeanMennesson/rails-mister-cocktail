function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.navbar-wagon');
  const navbarTitle = navbar.querySelector('.navbar-wagon-title');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-wagon-white');
        navbarTitle.classList.remove('navbar-wagon-title-transparent');
      } else {
        navbar.classList.remove('navbar-wagon-white'),
        navbarTitle.classList.add('navbar-wagon-title-transparent');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
