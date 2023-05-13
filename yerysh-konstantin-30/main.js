const wrapBtn = document.querySelector('.wrapper');

wrapBtn.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'BUTTON') {
    const countEl = target.nextElementSibling;
    const count = Number(countEl.textContent);
    countEl.textContent = count + 1;
  }
});
