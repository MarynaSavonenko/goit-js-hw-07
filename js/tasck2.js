const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
//получаем доступ к списку 
const ingredientsContainer = document.querySelector('#ingredients')

ingredients.forEach(element => {
   const listItem =  document.createElement('li')
   listItem.textContent = element;
   listItem.style.listStyle = 'none'
   ingredientsContainer.appendChild(listItem)
});
