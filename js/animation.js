//Title Animation:
  const tl = gsap.timeline();
  tl.from(".logo", { delay: 0.25, duration: 2, opacity: 0, ease: "ease-in" });

//Arrow:
  gsap.from(".arrow", { delay: 0.5, opacity: 0, duration: 2 });
  gsap.to(".arrow", { y: 12, ease: "power1.inOut", repeat: -1, yoyo: true });

  gsap.to(".carousel-button", { x: 5, ease: "power1.inOut", repeat: -1, yoyo: true });