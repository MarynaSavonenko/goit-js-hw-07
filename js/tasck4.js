const caunterContainer = document.querySelector('#counter');
const btnDecrement = caunterContainer.querySelector('button[data-action="decrement"]')
const btnIncrement = caunterContainer.querySelector('button[data-action="increment"]')
const spanEl = caunterContainer.querySelector('#value');


btnDecrement.addEventListener('click', e => {
    spanEl.textContent =  spanEl.textContent-1
})

btnIncrement.addEventListener('click', e => {
    spanEl.textContent =  +spanEl.textContent + 1
})