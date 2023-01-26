let lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener('scroll' , function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    /* if(scrollTop > lastScrollTop) {
        navbar.style.top = '-80px';
    } else {
        navbar.style.top = '0'
    } */
    if (scrollTop > lastScrollTop) {
        navbar.style.transform = "translate3d(0, -100%, 0)";
    } else {
        navbar.style.transform = "translate3d(0, 0, 0)";
    }
    lastScrollTop = scrollTop;
})