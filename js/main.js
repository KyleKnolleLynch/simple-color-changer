const colors = ['lime', 'tomato', 'rebeccapurple', 'skyblue', 'darkblue', 'goldenrod', 'plum'];
const btn = document.querySelector('.btn-hero');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randomNum = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
});