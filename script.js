const menuIcon =document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const tl = gsap.timeline()

tl 
    .to('.social-icons a', {
        x: 0,
        stagger: -0.2,
        duration: .5,
        ease: "power4.inOut",
    })
    .to('.btn-group a', {
        stagger: .2,
        duration: .5,
        opacity: '100',
    })

// Home

// About

// Services

// Contact