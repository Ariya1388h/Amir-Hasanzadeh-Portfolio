const menuIcon =document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const tl = gsap.timeline()

tl 


    // Home

    .to('.home-social-icons a', {
        x: 0,
        stagger: -0.2,
        duration: .5,
        ease: "power4.inOut",
    })

    .to('.btn-group a', {
        stagger: .2,
        duration: .5,
        opacity: '100',
        visibility: 'visible',
    })

    // .to('.home-img img', {
    //     duration: 2,
    //     clipPath: 'circle(50%)'
    // })


    // About

    .to('.about-content a', {
        opacity: 1,
        visibility: 'visible',
        boxShadow: '0 0 25px var(--main-color)',  
        scrollTrigger: {
            trigger: '.about-content a',
            start: "-120% center",
            end: "-120% center",
            markers: true,
            toggleActions: 'play none play none',
          },  
    })


    // Services

    .to('.service-box', {
        height: 400,
        backgroundColor: '#0077ff',
        visibility: 'visible',
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: '.service-box',
            start: "center center",
            end: "bottom center",
            scrub: true,
            markers: true,
            toggleActions: 'play none play none',
          },   
    })

    