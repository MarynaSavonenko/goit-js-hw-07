const listCategories = document.querySelector('#categories')
console.log(`В списке ${listCategories.children.length} категории.`)
const childrenList = Array.from(listCategories.children)
console.dir(childrenList)
childrenList.forEach(e => {
    console.log(`Категория: ${e.firstElementChild.textContent}`)
    console.log(`Количество элементов: ${e.lastElementChild.children.length}`)
});