const menuBtn = document.querySelector('.menu__btn')
const menuClose = document.querySelector('.menu__close')
const menuList = document.querySelector('.menu__list')
const menuBackground = document.querySelector('.menu--close')

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--open')
    menuBackground.classList.toggle('menu--open')
})

menuClose.addEventListener('click', () => {
    menuList.classList.remove('menu__list--open')
    menuBackground.classList.remove('menu--open')
})

menuBackground.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--open')
    menuBackground.classList.toggle('menu--open')  
})