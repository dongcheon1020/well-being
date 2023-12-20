let observer = new IntersectionObserver((e) => {
  e.forEach((text) => {
    if (text.isIntersecting) {
      text.target.style.opacity = 1;
      text.target.style.transform = "translateY(0)";
    } else {
      text.target.style.opacity = 0;
      text.target.style.transform = "translateY(50px)";
    }
    text.intersectionRatio(0.5);
  });
});
let show = document.querySelectorAll(".show");

observer.observe(show[0]);
observer.observe(show[1]);
observer.observe(show[2]);
observer.observe(show[3]);
observer.observe(show[4]);
observer.observe(show[5]);
observer.observe(show[6]);
observer.observe(show[7]);
observer.observe(show[8]);
observer.observe(show[9]);
observer.observe(show[10]);
observer.observe(show[11]);
observer.observe(show[12]);
observer.observe(show[13]);
