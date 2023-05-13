const tableNumber = document.createElement('table');

let count = 1;
for (let i = 0; i < 10; i++) {
  let row = document.createElement('tr');
  for (let j = 0; j < 10; j++) {
    let pillar = document.createElement('td');

    setTimeout(function(number) {
      pillar.textContent = number;
    }, 500 * count, count);
    row.appendChild(pillar);
    count++;
  }
  tableNumber.appendChild(row);
}

document.body.appendChild(tableNumber);

