const colors = ['lime', 'tomato', 'rgb(133,122,200)', '#b00080'];
const btn = document.querySelector('.btn-hero');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randomNum = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
});