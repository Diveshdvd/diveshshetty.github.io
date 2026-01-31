gsap.registerPlugin(ScrollTrigger);

/*
  Calm, subtle reveal animation.
  Small movement, slow easing.
*/
gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    }
  });
});
