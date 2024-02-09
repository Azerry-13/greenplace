document.addEventListener('DOMContentLoaded', function () {
    let burgerMenu = document.getElementById("burger-menu");
    let headerMobile = document.querySelector(".header-mobile");

    burgerMenu.addEventListener('click', function () {
        this.classList.toggle('is-active');
        headerMobile.classList.toggle('active', this.classList.contains('is-active'));
    });
});