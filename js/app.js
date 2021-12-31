const animItems = document.querySelectorAll('._anim-item')
if(animItems.length > 0){
    window.addEventListener('scroll', animScroll);
    function animScroll(){
        for (let i = 0; i < animItems.length; i++) {
            const el = animItems[i];
            const elHeight = el.offsetHeight;
            const elOffset = offset(el).top;
            const animStart = 4;

            const elPoint = window.innerHeight - elHeight / animStart;
            if(elHeight > window.innerHeight){
                window.innerHeight - window.innerHeight / animStart;
            }
            if((scrollY > elOffset - elPoint) && scrollY < (elOffset)){
                el.classList.add('_active');
            }
        }
    }

    function offset(el){
        const rect = el.getBoundingClientRect(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(()=>{
        animScroll();
    }, 300)
}