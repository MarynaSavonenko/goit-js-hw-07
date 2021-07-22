const inputEl = document.querySelector('#name-input');
const spanOutputEl = document.querySelector('#name-output');

// условие ?да : yt
inputEl.addEventListener('input', e => {
    console.dir(inputEl.value)
    inputEl.value == ''?spanOutputEl.textContent = 'незнакомец':spanOutputEl.textContent = inputEl.value
})