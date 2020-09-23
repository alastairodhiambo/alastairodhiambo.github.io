gsap.registerPlugin(ScrollTrigger);

//Title Animation:

const tl= gsap.timeline();
tl.to("#loadscreen",
{delay: 1.5, duration: 0.5, scale: 0, /* x: "-50%", y: "-50%" ,*/ ease: "none"})
tl.to("#loadscreen",
{duration: 0.1, y: -5000, ease: "none"})
tl.from(".logo", 
{duration: 1.5, opacity: 0, scale: 0.3, ease: "back", });
tl.from("#banner-text", {duration: 2, opacity: 0, y: "random(-200, 200)", stagger: 0.25}, "-=0.5");



//Arrow:

gsap.to(".arrow", {y: 12, ease: "power1.inOut", repeat: -1, yoyo: true});



//Scroll Animation:

function goToSection(i, anim) {
  gsap.to(window, {
    scrollTo: {y: i*innerHeight, autoKill: false},
    duration: 1.0
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

const aboutLink = document.querySelector('.about-link');

aboutLink.addEventListener('click', () => {
    window.location ='#about';
})


