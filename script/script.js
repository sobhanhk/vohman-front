const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 5,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px

    500: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

    680: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    850: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    1100: {
      slidesPerView: 5,
      spaceBetween: 40,
    },

    // // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    // },

    // // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    freeMode: {
      enable: true,
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    //   draggable: true,
    // },
  },
});
