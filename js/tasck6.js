const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', e => {
    console.log(+inputEl.dataset.length)
    if(e.currentTarget.value.length === +inputEl.dataset.length){
        inputEl.classList.add('valid')
        if(inputEl.classList.contains('invalid')){
         inputEl.classList.remove('invalid')   
        }
        return
    }
    inputEl.classList.add('invalid')
    if(inputEl.classList.contains('valid')){
        inputEl.classList.remove('valid')   
       }
    return
})
