const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuCloseBtn = document.querySelector('.main__mobile-menu-head-btn');

const openMenu = (event) => {
  mobileMenu.classList.toggle('main__mobile-menu-active');
};

mobileMenuBtn.addEventListener('click', openMenu);
mobileMenuCloseBtn.addEventListener('click', openMenu);