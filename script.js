const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".hero-panel, .content-row, .feature-band").forEach((section) => {
  section.classList.add("reveal");
  observer.observe(section);
});
