let tl = gsap.timeline();

tl.from(
  "#nav h3 , i",
  {
    y: 30,
    opacity: 0,
    stagger: 0.3,
    duartion: 0.3,
  },
  "a"
)
  .from("#heading h1", {
    opacity: 0,
    scale: 2,
  })
  .from("#center p", {
    opacity: 0,
    x: 250,
    duartion: 0.2,
  })
  .from(".cart", {
    opacity: 0,
    scale: 0,
    stagger: 0.3,
    duartion: 0.2,
  })
  .from("#img", {
    opacity: 0,
    scale: 0,
    duartion: 0.2,
  });
