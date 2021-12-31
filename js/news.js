const img = document.querySelectorAll('.bg-img');
const overlay = document.querySelectorAll('.news-overlay');
const text = document.querySelector('.news-heading');

console.log(text.length);

for(let i = 0; i < overlay.length; i++){
    overlay[i].addEventListener('mouseover',()=>{
        img[i].style.filter = 'blur(2px)'
    });
}

for(let i = 0; i < overlay.length; i++){
    overlay[i].addEventListener('mouseout',()=>{img[i].style.filter = 'blur(0px)'});
}