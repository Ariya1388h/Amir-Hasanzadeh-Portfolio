const menuIcon =document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const tl = gsap.timeline()


const inputs = document.querySelectorAll('input, textarea');
let activeAnimation = null;

inputs.forEach(input => {
  input.addEventListener('focus', () => {
    // Kill any existing animation on other inputs
    if (activeAnimation) activeAnimation.kill();

    // Create a new animation for the focused input
    activeAnimation = gsap.to(input, {
      boxShadow: '0 0 20px 5px rgba(52, 152, 219, 0.7)',
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: 'power1.inOut',
    });
  });

  input.addEventListener('blur', () => {
    // Stop the current animation
    if (activeAnimation) {
      activeAnimation.kill();
      activeAnimation = null;

      // Reset the boxShadow smoothly
      gsap.to(input, {
        boxShadow: '0 0 0 0 rgba(52, 152, 219, 0.7)',
        duration: 0.5,
        ease: 'power1.out',
      });
    }
  });
});

document.querySelectorAll('.about-content p').forEach(p => {
    const text = p.textContent;
    p.textContent = ''; // Clear the text initially

    // Split the text into individual characters and wrap each in a span
    const chars = text.split('').map(char => `<span>${char}</span>`).join('');
    p.innerHTML = chars;

    const totalDuration = text.length * 0.05; // Adjust the multiplier to control speed

    gsap.fromTo(p.querySelectorAll('span'), {
      opacity: 0,
      x: 10
    }, {
      opacity: 1,
      x: 0,
      duration: 0.05, // Shorten duration for each character
      stagger: {
        amount: totalDuration, // Total duration for the entire animation
        from: "start" // Optional: start staggering from the beginning
      },
      ease: 'power1.out',
      scrollTrigger: {
        trigger: p,
        start: 'center center', // Start animation when the element is centered in the viewport
        toggleActions: 'play none none none' // Play animation on trigger
      }
    });
  });

// GSAP TIMELINE

tl 

    .to('.home-social-icons a', {
        x: 0,
        stagger: -0.2,
        duration: .5,
    })

    .to('.home-btn a', {
        stagger: .2,
        duration: .5,
        opacity: '100',
        visibility: 'visible',
    })

    // .to('.home-img img', {
    //     duration: 2,
    //     clipPath: 'circle(50%)'
    // })

    .to('.about-content a', {
        opacity: 1,
        visibility: 'visible',
        boxShadow: '0 0 25px var(--main-color)',  
        scrollTrigger: {
            trigger: '.about-content a',
            start: "-350% center",
            end: "-350% center",
            scrub: true,
            toggleActions: 'play none play none',
          },  
    })

    // .from('.about-content p', {
    //     x: '-100vw',
    //     opacity: .3,
    //     ease: 'power4.inOut',
    //     scrollTrigger: {
    //         trigger: '.about-content p',
    //         start: "top bottom",
    //         end: "bottom center",
    //         scrub: true,
    //         toggleActions: 'play none play none',
    //     }, 
    // })

    .to('.service-box', {
        height: 400,
        backgroundColor: '#0077ff',
        visibility: 'visible',
        scrollTrigger: {
            trigger: '.service-box',
            start: "-50px center",
            end: "bottom center",
            scrub: true,
            toggleActions: 'play none play none',
          },   
    })
    
    .to('.heading-services', {
        transform: 'scale(1)',
        opacity: 1,
        ease: 'power4.inOut',
        scrollTrigger: {
            trigger: '.heading-services',
            start: "top 80%",
            end: "bottom center",
            scrub: true,
            toggleActions: 'play none play none',
          },  
    })
    

