const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ul = document.querySelector('#ingredients');

// const ingridientsInUl = ingredients.forEach(el => {
//     const newTag = document.createElement('li');
//     newTag.textContent = el;
//     ul.appendChild(newTag);
// })

const createLi = (text) => {
  const el = document.createElement('li');
  el.textContent = text;
  return el;
}

ul.append(...ingredients.map(createLi));