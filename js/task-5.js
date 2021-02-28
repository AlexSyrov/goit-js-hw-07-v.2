const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
};


refs.input.addEventListener('input', () => {
  refs.span.innerHTML = refs.input.value ||'незнакомец';
});