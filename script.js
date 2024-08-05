const menuIcon =document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const tl = gsap.timeline()

tl 
    .to(['.social-icons a','.btn-group a'], {
        x: 0,
        stagger: .2,
        duration: .3,
        ease: "power4.inOut",
    })
    // .to('.btn-group a', {
    //     x: 0,
    //     stagger: .2,
    //     duration: .3,
    //     ease: "power4.inOut",
    // })

// Home

// About

// Services

// Contact