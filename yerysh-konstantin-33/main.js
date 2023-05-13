function generateList(array) {
  const list = document.createElement('ul');

  for (let i = 0; i < array.length; i++) {
    const item = document.createElement('li');

    if (typeof array[i] === 'number') {
      item.textContent = array[i];
    }
    else if (Array.isArray(array[i])) {
      item.appendChild(generateList(array[i]));
    }

    list.appendChild(item);
  }

  return list;
}


const myArray = [1, 2, [1, 2, 3], 3];
const myList = generateList(myArray);
document.body.appendChild(myList);
