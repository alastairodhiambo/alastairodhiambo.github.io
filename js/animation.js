gsap.registerPlugin(ScrollTrigger);

function titleAnimation() {
  //Title Animation:
  const tl = gsap.timeline();
  tl.from(".logo", { delay: 0.25, duration: 2, opacity: 0, ease: "ease-in" });

  //Arrow:
  gsap.from(".arrow", { delay: 0.5, opacity: 0, duration: 2 });
  gsap.to(".arrow", { y: 12, ease: "power1.inOut", repeat: -1, yoyo: true });
}

if (window.matchMedia("(max-width: 600px)").matches) {
  titleAnimation();
} else {
  titleAnimation();

  function goToSection(i, anim) {
    gsap.to(window, {
      scrollTo: { y: i * innerHeight, autoKill: false },
      duration: 1.0,
      ease: "power1.inOut",
    });

    if (anim) {
      anim.restart();
    }
  }

  gsap.utils.toArray(".tiles").forEach((tile, i) => {
    ScrollTrigger.create({
      trigger: tile,
      onEnter: () => goToSection(i),
    });

    ScrollTrigger.create({
      trigger: tile,
      start: "bottom bottom",
      onEnterBack: () => goToSection(i),
    });
  });
}
