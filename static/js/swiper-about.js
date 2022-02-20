new Swiper('.swiper-about', {
    slidesPerView: 3,
    
    loop: true,
    
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