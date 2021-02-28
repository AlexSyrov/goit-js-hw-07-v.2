const btnDec =
    document.querySelector
        ('#counter button[data-action="decrement"]');

const btnInc =
    document.querySelector
        ('#counter button[data-action="increment"]');

const span =
    document.querySelector('#value');

    
let counterValue = 0;

btnDec.addEventListener('click', () => {
    counterValue -= 1;
    span.textContent = counterValue;
});

btnInc.addEventListener('click', () => {
  counterValue += 1;
  span.textContent = counterValue;
});