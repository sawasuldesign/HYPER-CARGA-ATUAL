
export const initScrollAnimation = () => {
  const animatedElements = document.querySelectorAll('.animated-element');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
};
