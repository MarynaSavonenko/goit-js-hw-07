const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsIdSearchEl = document.querySelector('#ingredients');

ingredients.forEach(ingredient =>{
const ingredientsLiCreateEl = document.createElement('li');
ingredientsLiCreateEl.textContent = ingredient;
ingredientsIdSearchEl.append(ingredientsLiCreateEl)
});