var swiper = new Swiper('.mySwiperPopular', {
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: '.bxs-chevron-right-circle',
    prevEl: '.bxs-chevron-left-circle',
  },
});

var swiperBlog = new Swiper('.mySwiperBlog', {
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: 'auto',
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// AOS
AOS.init();
