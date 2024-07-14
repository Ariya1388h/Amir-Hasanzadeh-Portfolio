const menuIcon =document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// GSAP

gsap.from('header', { duration: 1, y: '-100%', ease: "power4.inOut"})
gsap.from('.home', { duration: 1, y: '100%', delay: 1 })