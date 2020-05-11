const btn = document.querySelector('.btn-hero');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  let hexCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];
  let newColor = '#';
  for (let i = 0; i < 6; i++) {
    const randomCode = hexCode[Math.floor(Math.random() * 16)];
    newColor += randomCode;
  }
  document.body.style.backgroundColor = newColor;
  color.textContent = newColor;
});
