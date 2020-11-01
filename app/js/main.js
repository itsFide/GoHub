let animItems = document.querySelectorAll('.anim-items');
if(animItems.length > 0){
    window.addEventListener('scroll',animOnScroll)
    function animOnScroll(el){
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            let animItemHeight = animItem.offsetHeight;
            let animItemOffset = offset(animItem).top;
            let animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - animItemHeight / animStart;
            }

            if((pageYOffset > animItemOffset-animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active');
            } else{
                animItem.classList.remove('active');
            }
        }
    }
    function offset(el){
        let rect = el.getBoundingClientRect(),
        scrolLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrolTop = window.pageYOffset || document.documentElement.scrollTop;
        return{top:rect.top + scrolTop, left: rect.left + screenLeft}
    }
    setTimeout(()=>{
        animOnScroll()
    },200)

}