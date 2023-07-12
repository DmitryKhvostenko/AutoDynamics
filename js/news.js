const newsButtons = document.querySelectorAll('.news__number')

newsButtons.forEach((item) => {
    item.addEventListener('click', () => {
        newsButtons.forEach((item) => {
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})