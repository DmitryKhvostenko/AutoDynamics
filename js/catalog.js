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

let swiperr = new Swiper(".specialSwiper", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
});

const gridButton = document.querySelectorAll('.sort-catalog__button')
const numberButton = document.querySelectorAll('.sort-catalog__number')

function handleButtonClick(buttons) {
    buttons.forEach((item) => {
        item.addEventListener('click', (e) => {
            if (!e.target.classList.contains('active')) {
                buttons.forEach((btn) => {
                    btn.classList.remove('active')
                })
                e.target.classList.add('active')
            }
        })
    })
}

handleButtonClick(gridButton);
handleButtonClick(numberButton);


const grid1 = document.querySelector('.catalog__content_grid-1')
const grid2 = document.querySelector('.catalog__content_grid-2')

gridButton.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        if (index == 0) {
            grid1.classList.add('active')
            grid2.classList.remove('active')
        } else {
            grid2.classList.add('active')
            grid1.classList.remove('active')
        }
    })
})


const pageItem = document.querySelectorAll('.catalog__pages-item')
const pageButtonPrev = document.querySelector('.catalog__pages-button_prev')
const pageButtonNext = document.querySelector('.catalog__pages-button_next')
const lastElem = pageItem[pageItem.length -1]
let currentItem = 0;
pageItem.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        if (!e.target.classList.contains('active')) {
            pageItem.forEach((btn) => {
                btn.classList.remove('active')
            })
            currentItem = index
            pageItem[currentItem].classList.add('active')
        }
        
    })
})
pageButtonPrev.addEventListener('click', () => {
    currentItem--
    pageItem.forEach((btn) => {
        btn.classList.remove('active')
    })
    pageItem[currentItem].classList.add('active')
})
pageButtonNext.addEventListener('click', () => {
    pageItem.forEach((btn) => {
        btn.classList.remove('active')
    })
    currentItem++
    pageItem[currentItem].classList.add('active')
})



const detail = document.querySelector('.catalog__detail')
const mainForm = document.querySelector('.form-catalog__main');
const subForm = document.querySelector('.form-catalog__sub-main');

detail.addEventListener('click', () => {
    if (mainForm.classList.contains('open')) {
        mainForm.classList.remove('open')
        subForm.classList.add('open')
        detail.classList.add('active')
        document.querySelector('.form-catalog__main-button').style = 'display:none;'
    }
    else {
        subForm.classList.remove('open')
        mainForm.classList.add('open')
        detail.classList.remove('active')
        document.querySelector('.form-catalog__main-button').style = 'display:block;'
    }
})