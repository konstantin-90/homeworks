const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const images = slider.querySelectorAll('img');
let index = 0;

function showImage(index) {
  images.forEach(image => image.classList.remove('active'));
  images[index].classList.add('active');
  if (index === 0) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
  }
  if (index === images.length - 1) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
  }
}

prevBtn.addEventListener('click', () => {
  index--;
  showImage(index);
});

nextBtn.addEventListener('click', () => {
  index++;
  showImage(index);
});

showImage(index);
