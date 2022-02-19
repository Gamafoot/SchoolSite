$('body').css('overflow-y', 'hidden');

let main_slider = $('#main-slide img')
let small_sliders = $('.slider-small img')
let current_slide = 0

SelectSlider(0);


function SelectSlider(index){
    current_slide = index
    main_slider.attr('src', small_sliders.eq(index).attr('src'));
}

function SlideNext(){
    current_slide++;
    Check()
    SelectSlider(current_slide)
}

function SlidePrev(){
    current_slide--;
    Check() 
    SelectSlider(current_slide)
}

function Check(){
    if(current_slide > small_sliders.length - 1){
        current_slide = 0;
    }
    else if(current_slide < 0){
        current_slide = small_sliders.length - 1;
    }
}