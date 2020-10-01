gsap.registerPlugin(ScrollTrigger);

//Arrow:
gsap.from(".arrow",{delay: 1.5, opacity: 0, duration: 2})
gsap.to(".arrow", {y: 12, ease: "power1.inOut", repeat: -1, yoyo: true});

//Scroll Animation:
if (window.matchMedia("(max-width: 600px)").matches) {
  return;
} else {
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
};

