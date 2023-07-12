const phones = document.querySelectorAll('.phone-mask')
phones.forEach((element) => {
    new IMask(element, {
        mask: '+{1}(000)000-00-00',
        placeholder: {
            show: 'always'
        }
    });
})

const selects = {
    mainSelect: {
        link: document.querySelectorAll('.form-catalog__main-select'),
        open: 'background-image: linear-gradient(135deg, transparent 50%, rgb(0, 0, 0) -50%), linear-gradient(45deg, rgb(0, 0, 0) 50%, transparent -50%) !important; calc(100% - 25px) calc(1em + 10px), calc(100% - 30px) calc(1em + 10px), 100% 0 !important',
        close: 'background-image: linear-gradient(45deg, transparent 50%, rgb(0, 0, 0) 50%), linear-gradient(135deg, rgb(0, 0, 0) 50%, transparent 50%); background-position:calc(100% - 17px) calc(1em + 2px), calc(100% - 14px) calc(1em + 2px), 100% 0;'
    },
    sortSelect: {
        link: document.querySelectorAll('.form-catalog__sort-select'),
        open: 'background-image: linear-gradient(135deg, transparent 50%, rgb(0, 0, 0) -50%), linear-gradient(45deg, rgb(0, 0, 0) 50%, transparent -50%) !important; calc(100% - 25px) calc(1em + 10px), calc(100% - 30px) calc(1em + 10px), 100% 0 !important',
        close: 'background-image: linear-gradient(45deg, transparent 50%, rgb(0, 0, 0) 50%), linear-gradient(135deg, rgb(0, 0, 0) 50%, transparent 50%); background-position:calc(100% - 17px) calc(1em + -2px), calc(100% - 14px) calc(1em + -2px), 100% 0;'
    },
    newsSelect: {
        link: document.querySelectorAll('.news__select'),
        open: 'background-image: linear-gradient(135deg, transparent 50%, rgb(0, 0, 0) -50%), linear-gradient(45deg, rgb(0, 0, 0) 50%, transparent -50%) !important; calc(100% - 25px) calc(1em + 10px), calc(100% - 30px) calc(1em + 10px), 100% 0 !important',
        close: 'background-image: linear-gradient(45deg, transparent 50%, rgb(0, 0, 0) 50%), linear-gradient(135deg, rgb(0, 0, 0) 50%, transparent 50%); background-position:calc(100% - 17px) calc(1em + -2px), calc(100% - 14px) calc(1em + -2px), 100% 0;'
    }
}

Object.keys(selects).forEach((key) => {
    selects[key].link.forEach((item) => {
        item.addEventListener('click', () => {
            if (item.getAttribute('isopen') == 'false') {
                item.style = selects[key].open;
                item.setAttribute('isopen', "true")
            }
            else {
                item.style = selects[key].close
                item.setAttribute('isopen', "false")
            }
        })
    })
})

const navItem = document.querySelectorAll('.nav-main__item')
const navTabs = document.querySelector('.tabs')
navItem.forEach((item, index) => {
    if (index >= 0 && index <=2 ) {
        item.addEventListener('mouseover', () => {
            navTabs.classList.add('active')
        })
    }
    item.addEventListener('mouseout', () => {
        navTabs.classList.remove('active')
    })
})

const burger = document.querySelector('.burger__content')
const burgerOpen = document.querySelector('.burger__icon')
const burgerClose = document.querySelector('.burger__close')

burgerOpen.addEventListener('click', () => {
    burger.classList.add('active')
    document.body.style.overflow = 'hidden';
})

burgerClose.addEventListener('click', () => {
    burger.classList.remove('active')
    document.body.style.overflow = 'hidden';
})

const burgerItem = document.querySelectorAll('.burger__item')

burgerItem.forEach((item, index) => {
    if (index != 3 && index != 6) {
        item.addEventListener('click', () => {
            if (item.classList.contains('active')) {
                item.classList.remove('active')
            }
            else {
                burgerItem.forEach((clear) => {
                    clear.classList.remove('active')
                })
                item.classList.add('active')
            }
        })
    }
})

const modelBody = document.querySelectorAll('.accord-item')
const modelButton = document.querySelectorAll('.accord-item-button')

modelBody.forEach((item,index) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')
        if (item.classList.contains('active')) {
            modelButton[index].innerHTML = '-'
        }
        else modelButton[index].innerHTML = '+'
    })
})