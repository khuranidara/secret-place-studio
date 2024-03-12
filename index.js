const title = document.getElementById('title');
const letters = title.textContent.split('');

title.textContent = '';

letters.forEach((letter, index) => {
  const span = document.createElement('span');
  span.textContent = letter;
  span.style.animationDelay = `${0.1 * index}s`;
  title.appendChild(span);
});