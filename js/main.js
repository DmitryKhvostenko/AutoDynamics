const swiperEl = document.querySelector('swiper-container')

const params = {
    autoplay: {
        delay: 5000,
    },
    injectStyles: [`
      .swiper-pagination-bullet {
        width: 15px;
        height: 15px;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        color: #000;
        opacity: 1;
        background: #C7C7C7;
        margin: 0px 10px !important;
      }

      .swiper-pagination-bullet-active {
        color: #fff;
        background: #212121;
      }
      `],
    pagination: {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
}

let swiperr = new Swiper(".specialSwiper", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
});

Object.assign(swiperEl, params)

swiperEl.initialize();

const stateButtons = document.querySelectorAll('.find__state-button')

stateButtons.forEach((item) => {
    item.addEventListener('click', () => {
        stateButtons.forEach((elem) => {
            elem.classList.remove('active')
        })
        item.classList.add('active')
    })
})

const nameForm2 = document.querySelector('.form-name-2');
const numberForm2 = document.querySelector('.form-number-2');
const buttonForm2 = document.querySelector('.form-button-2');
const checkboxForm2 = document.querySelector('.form-checkbox-2');

let form2 = {
    input: false,
    number: false,
    checkbox: false
}

nameForm2.addEventListener('input', () => {
    if (nameForm2.value.length >= 1) {
        form2.input = true;
        nameForm2.parentElement.classList.remove('err')
    }
})
numberForm2.addEventListener('input', () => {
    if (numberForm2.value.length >= 17) {
        form2.number = true;
        numberForm2.parentElement.classList.remove('err')
    }
})
checkboxForm2.addEventListener('change', () => {
    if (checkboxForm2.checked) {
        form2.checkbox = true;
    }
})

buttonForm2.addEventListener('click', (e) => {
    if (Object.values(form2).every(Boolean)) {
        e.preventDefault()
        document.querySelector('.request__text').classList.add('hidden')
        document.querySelector('.request__thanks').classList.add('active')
    }
    else {
        e.preventDefault()
        if (nameForm2.value.length < 1) {
            nameForm2.parentElement.classList.add('err')
        }
        if (numberForm2.value.length < 17) {
            numberForm2.parentElement.classList.add('err')
        }
    }
})

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

const numberForm3 = document.querySelector('.contact__number');
const infoForm3 = document.querySelector('.contact__sub-button');
const buttonForm3 = document.querySelector('.contact__button');

let isNumberForm3 = false;
let isInfoForm3 = false;

numberForm3.addEventListener('input', () => {
    if (numberForm3.value.length >= 17) {
        isNumberForm3 = true;
        numberForm3.parentElement.classList.remove('err')
    } else {
        isNumberForm3 = false;
    }
})
infoForm3.addEventListener('change', (e) => {
    if (infoForm3.checked) {
        isInfoForm3 = true;
        infoForm3.parentElement.classList.remove('errCheck')
    }
    else {
        isInfoForm3 = false;
    }
})

buttonForm3.addEventListener('click', (e) => {
    if (!isNumberForm3) {
        numberForm3.parentElement.classList.add('err')
        e.preventDefault()
    }
    if (!isInfoForm3) {
        infoForm3.parentElement.classList.add('errCheck')
        e.preventDefault()
    }
})

