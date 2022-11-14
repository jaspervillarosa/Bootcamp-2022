console.log("connected")

const menu_btn = document.querySelector('.hamburger-Container');
const mobile_nav = document.querySelector('.navList-Mobile');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_nav.classList.toggle('is-active');
});