document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const reveal = () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 100;
      if (sectionTop < triggerPoint) {
        section.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();
});
