const menuIcon =document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// GSAP


// let tl = gsap.timeline ({
//     scrollTrigger: {
//         trigger: 'about-img',
//         start: '100vw center',
//         end: 'bottom center',
//         scrub: false,
//         markers: true,
//         toggleActions: 'play onLeave onEnterBack onLeaveBack'
//     }
// })

gsap.registerPlugin(ScrollTrigger);

// Home

gsap.from('header', {
    duration: 1,
    y: '-100%',
    ease: "power4.inOut"
})

gsap.from('.home-img', {
    duration: 1,
    x: '-200%',
    delay: .5,
    ease: "power4.Out" })

gsap.from('.home-content', {
    duration: 1,
    x: '200%',
    delay: .5,
    ease: "power2.Out"
})

// About

gsap.from('.about-img', {
    scrollTrigger: {trigger: '.about-img', toggleAction: "restart none reverse pause"},
    duration: 1,
    x: '200%',
    ease: "power4.Out"
})

gsap.from('.about-content', {
    scrollTrigger: {trigger: '.about-content', toggleAction: "restart none reverse pause"},
    duration: 1,
    x: '-200%',
    ease: "power4.Out"
})

// Services

gsap.from('.service-container-1', {
    scrollTrigger: {trigger: '.service-container-3', toggleAction: "restart none reverse pause"},
    duration: 1,
    x: "200%",
    ease: "power4.Out"
})

gsap.from('.service-container-3', {
    scrollTrigger: {trigger: '.service-container-3', toggleAction: "restart none reverse pause"},
    duration: 1,
    x: "-200%",
    ease: "power4.Out"
})

gsap.from('.service-container-2', {
    scrollTrigger: {trigger: '.service-container-3', toggleAction: "restart none reverse pause"},
    duration: 1,
    y: "100%",
    ease: "power4.Out"
})

// Contact

gsap.from('form', {
    scrollTrigger: {trigger: 'form', toggleAction: "restart none reverse pause"},
    duration: 1,
    x: "200%",
    ease: "power4.Out",
})

