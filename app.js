document.addEventListener('DOMContentLoaded', function() {
  const observerAnimUp = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animateanimated', 'animatefadeInUp');
              observerAnimUp.unobserve(entry.target);
          }
      });
  }, { threshold: 0, rootMargin: '0px 0px -20% 0px' });

  const elementsToAnimateUp = document.querySelectorAll('.animup');
  elementsToAnimateUp.forEach(element => observerAnimUp.observe(element));

  const observerAnimRight = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animateanimated', 'animatefadeInRight');
              observerAnimRight.unobserve(entry.target);
          }
      });
  }, { threshold: 0, rootMargin: '0px 0px -20% 0px' });

  const elementsToAnimateRight = document.querySelectorAll('.animright');
  elementsToAnimateRight.forEach(element => observerAnimRight.observe(element));
});