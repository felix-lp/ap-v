const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  
  slidesPerView: 'auto',
  breakpoints: {
    // when window width is >= 320px
    
    // when window width is >= 640px
    500: {
      slidesPerView: 'auto',
      
    },

  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',

  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  
});