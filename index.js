const title = document.getElementById('title');
const letters = title.textContent.split('');

title.textContent = '';

letters.forEach((letter, index) => {
  const span = document.createElement('span');
  span.textContent = letter;
  span.style.animationDelay = `${0.1 * index}s`;
  title.appendChild(span);
});

function onEntry(entry) {
  entry.forEach(change => {
      if (change.isIntersecting) {
          change.target.classList.add('element-show');
      }
  });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
elements.forEach(elm => {
  observer.observe(elm);
});