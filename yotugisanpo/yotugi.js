const fadeIn = function(){

    const target = document.getElementsByClassName('fade-in fade-in-up');
    const position = Math.floor(window.innerHeight * .95);

    for (let i = 0; i < target.length; i++) {

        let offsetTop = Math.floor(target[i].getBoundingClientRect().top);
        let offsetBottom = Math.floor(target[i].getBoundingClientRect().bottom);

        if (offsetTop < position) {
            target[i].classList.add('scroll-in');
        }
        
        if(offsetBottom < 0){
            target[i].classList.remove('scroll-in');
        }
    }
}
window.addEventListener('scroll', fadeIn, false);