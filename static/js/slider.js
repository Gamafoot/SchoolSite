const swiper = new Swiper('.swiper-about', {
    loop: true,
    slidesPerView: 3,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletActiveClass: 'active-bullet',
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});