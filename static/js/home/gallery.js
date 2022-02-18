$(()=>{
    new Swiper('.gallery-swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs:{
            swiper:{
                el:'.small-swiper',
                slidesPerView: 5,
            }
        }
    })

    
});