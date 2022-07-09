const swiper = new Swiper('.swiper', {
  slidesPerView: 6,
  spaceBetween: 30,
  slidesPerGroup: 5,
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

// break pints for swipper
breakpoints: { 
   '0': {
      slidesPerView: 1
    },
    '480': {
      slidesPerView: 2,
      spaceBetween: 20,},
    '900': {
      slidesPerView: 4,
      spaceBetween: 20, },
    '1100': {
      slidesPerView: 6,
      spaceBetween: 20, },

  },
});
