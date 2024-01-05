let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio === 1) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "opacity 0.5s, transform 0.5s";
      } else if (entry.intersectionRatio === 0) {
        entry.target.style.opacity = 0;
        entry.target.style.transform = "translateY(30px)";
        entry.target.style.transition = "opacity 0.5s, transform 0.5s";
      }
    });
  },
  { threshold: [0, 1] }
);

let show = document.querySelectorAll(".evtext");

show.forEach((element) => {
  observer.observe(element);
});
