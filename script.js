const menuIcon =document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const tl = gsap.timeline()

tl 
    .to('.home-social-icons a', {
        x: 0,
        stagger: -0.2,
        duration: .5,
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: '.home-social-icons a',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
    })

    .to('.btn-group a', {
        stagger: .2,
        duration: .5,
        opacity: '100',
        scrollTrigger: {
            trigger: '.btn-group a',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
    })

    .to('.about-content a', {
        stagger: .2,
        duration: .5,
        opacity: '100',
        boxShadow: '0 0 25px var(--main-color)',  
        scrollTrigger: {
            trigger: '.about-content a',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },  
    })

    // .to('.home-img img', {
    //     duration: 2,
    //     clipPath: 'circle(50%)'
    // })

    


// Home

// About

// Services

// Contact