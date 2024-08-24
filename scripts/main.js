// toggle & responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navLists = document.querySelector("nav")

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active")
        burger.classList.toggle("toggle-burger")
    });
};

navSlide();

// clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
};

// back to top button
document.addEventListener("DOMContentLoaded", function() {
    var backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > document.getElementById('services').offsetTop) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
});