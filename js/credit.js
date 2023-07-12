let partnersSwiper = new Swiper(".partnersSwiper", {
    autoplay: {
        delay: 5000,
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,

});

const progressPercent = document.querySelector('.calculator__percent-range');
const currentPercent = document.querySelector('.calculator__percents-current');
let valPercent = (progressPercent.value / progressPercent.max) * 100;
let realPercent = (progressPercent.value / progressPercent.max) * 80;
currentPercent.style.left = (11.8 * (realPercent / 10)) + '%';
currentPercent.innerHTML = realPercent + '%'
progressPercent.style.background = `linear-gradient(to right, #212121 ${valPercent}%, #C7C7C7 ${valPercent}%)`;
progressPercent.addEventListener('input', function () {
    let valPercent = (progressPercent.value / progressPercent.max) * 100;
    let realPercent = (progressPercent.value / progressPercent.max) * 80;
    progressPercent.style.background = `linear-gradient(to right, #212121 ${valPercent}%, #C7C7C7 ${valPercent}%)`;
    console.log(realPercent)
    currentPercent.innerHTML = realPercent + '%'
    currentPercent.style.left = (11.8 * (realPercent / 10)) + '%';
})

const progressTime = document.querySelector('.calculator__time-range');
const currentTime = document.querySelector('.calculator__time-current');
let valTime = (progressTime.value / progressTime.max) * 100;
let realTime = (progressTime.value / progressTime.max) * 90;
progressTime.style.background = `linear-gradient(to right, #212121 ${valTime}%, #C7C7C7 ${valTime}%)`;
currentTime.innerHTML = realTime + 6 + ' mon'
currentTime.style.left = (10.1 * (realTime / 10)) + '%';
progressTime.addEventListener('input', function () {
    let valTime = (progressTime.value / progressTime.max) * 100;
    let realTime = (progressTime.value / progressTime.max) * 90;
    progressTime.style.background = `linear-gradient(to right, #212121 ${valTime}%, #C7C7C7 ${valTime}%)`;
    console.log(realTime)
    currentTime.innerHTML = realTime + 6 + ' mon'
    currentTime.style.left = (10.1 * (realTime / 10)) + '%';
})