// Reveal project cards on scroll
const cards = document.querySelectorAll('.project-card');

if ('IntersectionObserver' in window && cards.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach((card) => observer.observe(card));
} else {
  cards.forEach((card) => card.classList.add('is-visible'));
}
