'use strict';

//  Add event listener for multiple elements
const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}


//  ===== Preloader ======

// Preload will be visible untill document load

const preloader = document.querySelector('[data-preloader]');

if (preloader) {
    window.addEventListener("load", function () {
        preloader.classList.add('loaded');
        this.document.body.classList.add('loaded')
    })
}

// ======= Mobile navbar ======

// show the mobile navbar when click menu button

const navbar = document.querySelector('[data-navbar]')
const navTogglers = document.querySelectorAll('[data-nav-toggler]')
const navbarLink = document.querySelectorAll('.navbar-link')
const overlay = document.querySelector('[data-overlay]')

const toggleNav = function () {
    navbar.classList.toggle('active')
    overlay.classList.toggle('active')
    document.body.classList.toggle('nav-active')
}

addEventOnElements(navTogglers, 'click', toggleNav);

navbarLink.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active')
        overlay.classList.remove('active')
        document.body.classList.remove('nav-active')
    })
})

// ======= Header & Back to top btn ======

//  active header & Back to top btn when window scroll down to 100px

const header = document.querySelector('[data-header]');
const backTopBtn = document.querySelector('[data-back-top-btn]')


const activeElementOnScroll = function () {
    if (window.scrollY > 100) {
        header.classList.add('active')
        backTopBtn.classList.add('active')
    } else {
        header.classList.remove('active')
        backTopBtn.classList.remove('active')
    }
}

window.addEventListener('scroll', activeElementOnScroll);


// ======= Scroll Reveal ======

const revealElements = document.querySelectorAll('[data-reveal]')

const revealElementOnScroll = function () {
    for (let i = 0, len = revealElements.length; i < len; i++) {
        if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
            revealElements[i].classList.add('revealed')
        } else {
            revealElements[i].classList.remove('revealed')
        }

    }
}

window.addEventListener('scroll', revealElementOnScroll)
window.addEventListener('load', revealElementOnScroll)


//  ===== About ======
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-text");

tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("active")) return;

        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        tabContents.forEach(content => content.classList.remove("active"));

        const target = btn.dataset.tab;
        document.getElementById(target).classList.add("active");
    });
});
