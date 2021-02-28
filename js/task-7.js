const fontSize = document.querySelector('#font-size-control');

const text = document.querySelector('#text');

fontSize.addEventListener('input', (e) => {
  text.style.fontSize = e.currentTarget.value + 'px';
});