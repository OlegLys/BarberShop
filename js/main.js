const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: '1',
  spaceBetween: '16',

  breakpoints: {
    480: {
      slidesPerView: '1',
    },
    768: {
      slidesPerView: '1',
    },
    1048: {
      slidesPerView: '2',
    },
    1280: {
      slidesPerView: '2',
    },
    1920: {
      slidesPerView: '2',
    },
  },

  navigation: {
    nextEl: '.header__down-button.next',
    prevEl: '.header__down-button.prev',
  },
  watchOverflow: false,
});

const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__line');

navBtn.onclick = function () {
  navIcon.classList.toggle('nav-icon--active');
  nav.classList.toggle('header__line--mobile');
  document.body.classList.toggle('no-scroll');
};
