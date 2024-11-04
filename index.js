document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', () => {
      menu.classList.toggle('visible');
      if (menu.classList.contains('visible')) {
        menuToggle.classList.add('cross');
    } else {
        menuToggle.classList.remove('cross');
    }
  });

  const buttons = document.querySelectorAll('.button');
  const pulseDuration = 1500;
  const pauseDuration = 5000;

  function triggerDoublePulse(button) {
    button.classList.add('pulsing');
    setTimeout(() => {
      button.classList.remove('pulsing');
      setTimeout(() => {
        button.classList.add('pulsing');
        setTimeout(() => {
          button.classList.remove('pulsing');
        }, pulseDuration);
      }, 100);
    }, pulseDuration);
  }

  buttons.forEach(button => {
    setInterval(() => {
      triggerDoublePulse(button);
    }, 2 * pulseDuration + pauseDuration);
  });

  const backToTopButton = document.getElementById('back-to-top');

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

});

document.addEventListener('scroll', function() {
  const parallaxSection = document.querySelector('main');
  if (parallaxSection) {
    const scrollPosition = window.pageYOffset;
    // Эффект параллакс
    const offset = scrollPosition * 0.00001;
    parallaxSection.style.backgroundPositionY = `${offset}px`;
  }
});