const photo_t = document.querySelectorAll(".photo-teacher");
const overlay = document.querySelectorAll(".overlay");
const discribe = document.querySelectorAll(".discribe");

hover();

function hover(){
    for(let i = 0; i < photo_t.length; i++){
        photo_t[i].addEventListener('mouseenter', ()=>{
            overlay[i].classList.add("overlay-hover");
            discribe[i].classList.add("discribe-hover");
        })

        photo_t[i].addEventListener('mouseleave', ()=>{
            overlay[i].classList.remove("overlay-hover");
            discribe[i].classList.remove("discribe-hover");
        })
    }
}

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
