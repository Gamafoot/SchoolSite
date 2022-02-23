//=====================
//   Gallery Swiper
//=====================
let gallery_sliders = $('#gallery-slides')
let gallery_overlay = $('.gallery-overlay')
let slider_small = $('.slider-small')
let imgs = null
let current_slide = 0
let main_slide = $('#main-slide img')

function IncludeSlider(index){
    $('body').css('overflow-y', 'hidden');
    gallery_sliders.css('display', '')
    gallery_overlay.css('display', '')
    sliderElem = slider_small.eq(index)
    sliderElem.css('display','')
    imgs = sliderElem.find('img')
    SetSlide()
}
function Back(){
    $('body').css('overflow-y', 'scroll');
    gallery_sliders.css('display', 'none')
    gallery_overlay.css('display', 'none')
    slider_small.css('display','none')
    current_slide = 0
    imgs = null
    main_slide.attr('src', '')
}
function SelectSlider(el, index){
    current_slide = index
    main_slide.attr('src', el.getAttribute('src'))
}
function SetSlide(){
    main_slide.attr('src', imgs.eq(0).attr('src'))
}
function NextSlide(){
    current_slide++
    Check()
    main_slide.attr('src', imgs.eq(current_slide).attr('src'))
}
function PrevSlide(){
    current_slide--
    Check()
    main_slide.attr('src', imgs.eq(current_slide).attr('src'))
}
function Check(){
    if(current_slide > imgs.length - 1){
        current_slide = 0;
    }
    else if(current_slide < 0){
        current_slide = imgs.length - 1;
    }
}
//Нихуя не понимаю(