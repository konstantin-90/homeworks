// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.


const array = [1, 2, 3, 'sg4', 5, 'gh', {}];


function removeElement(array, item) {
    const index = array.indexOf(item); 
    if (index !== -1) { 
      array.splice(index, 1); 
    }
    return array; 
}

removeElement(array, 'sg4');

console.log(array);
