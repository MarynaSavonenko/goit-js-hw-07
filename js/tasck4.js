const caunterContainer = document.querySelector('#counter');
const btnDecrement = caunterContainer.querySelector('button[data-action="decrement"]')
const btnIncrement = caunterContainer.querySelector('button[data-action="increment"]')
const spanEl = caunterContainer.querySelector('#value');
let value = 0

btnDecrement.addEventListener('click', e => {
    value-=1
    spanEl.textContent =  value
})

btnIncrement.addEventListener('click', e => {
    value+=1
    spanEl.textContent =  value
})