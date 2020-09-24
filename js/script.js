gsap.registerPlugin(ScrollTrigger);

//Title Animation:

const tl= gsap.timeline();
tl.from(".logo", 
{delay: 1.5, duration: 1, opacity: 0, y: -300, ease: "back", });
tl.from("#banner-text", {duration: 2, opacity: 0, y: "random(-200, 200)", stagger: 0.25}, "-=0.5");

//Arrow:
gsap.from(".arrow",{delay: 1.5, opacity: 0, duration: 2})
gsap.to(".arrow", {y: 12, ease: "power1.inOut", repeat: -1, yoyo: true});



//Scroll Animation:

function goToSection(i, anim) {
  gsap.to(window, {
    scrollTo: {y: i*innerHeight, autoKill: false},
    duration: 1.0, 
    ease: "power1.inOut"
  });
  
  if(anim) {
    anim.restart();
  }
}

gsap.utils.toArray(".tiles").forEach((tile, i) => {
  ScrollTrigger.create({
    trigger: tile,
    onEnter: () => goToSection(i)
  });
  
  ScrollTrigger.create({
    trigger: tile,
    start: "bottom bottom",
    onEnterBack: () => goToSection(i),
  });
});



const projectLink = document.querySelector('.project-link');
projectLink.addEventListener('click', () => {
    window.location ='#projects';

    //Workaround
    ScrollTrigger.create({
        trigger: "#about",
        onEnter: () => goToSection("#projects")
      });
})

// const aboutLink = document.querySelector('.about-link');

// aboutLink.addEventListener('click', () => {
//     window.location ='#about';
// })


