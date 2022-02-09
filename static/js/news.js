let card_body = $('.card-body');
let card_title = $('.card-title');

for(let i = 0; i < card_body.length; i++){
    card_body.eq(i).mouseenter(()=>{
        card_title.eq(i).addClass('card-title-hover');
    })
    card_body.eq(i).mouseleave(()=>{
        card_title.eq(i).removeClass('card-title-hover');
    })
}