let posts = $('#posts');
let btn_back = $('#back');
let gallery_swiper = $('.gallery-swiper');

function OpenPost(index){
    posts.css('display', 'none')
    btn_back.css('display','')
    gallery_swiper.eq(index).css('display', '')
    for(let i = 0; i < gallery_swiper.length; i++){
        if(i != index){
            gallery_swiper.eq(i).css('display', 'none');
        }
    }
}

function BackToPanel(){
    posts.css('display', '')
    btn_back.css('display','none')
    for(let i = 0; i < gallery_swiper.length; i++){
        gallery_swiper.eq(i).css('display', 'none');
    }
}