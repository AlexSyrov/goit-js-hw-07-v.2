const list = document.querySelector('#categories');

const listOfItem = list.children;
console.log(`В списке ${listOfItem.length} категории`);

const allItem = document.querySelectorAll('.item');
allItem.forEach(el => {
    const title = el.querySelector('h2')
    const categoriesEl = el.querySelectorAll('li');
    console.log(`Категория: ${title.textContent}
Количество элементов: ${categoriesEl.length}`)    
});