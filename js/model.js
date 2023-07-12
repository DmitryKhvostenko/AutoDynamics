let swiper = new Swiper(".myModelSwiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
let swiper2 = new Swiper(".myModelSwiper2", {
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    thumbs: {
        swiper: swiper,
    },
});

let swiperr = new Swiper(".model-sliderSwiper", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
});