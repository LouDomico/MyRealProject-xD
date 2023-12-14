window.addEventListener('error', function (e) {
    console.error('Error occurred:', e.error);
});

window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})
const mySwiper = new Swiper('.swiper', {
    freeMode: true,
    centeredSlides: true,
    // mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 5.5,
            spaceBetween: 50,
        },
        680: {
            slidesPerView: 5.5,
            spaceBetween: 135
        }
    }
})

