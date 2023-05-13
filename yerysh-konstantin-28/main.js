const images = ['bird.jpg', 'blue.jpg', 'dog.jpg', 'fenek.jpg', 'lis.jpg', 'panda.jpg', 'reptile.jpg', 'sokol.jpg', 'zebra.jpg'];

const img = document.getElementById('randomImages');

img.addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * images.length);

  img.src = 'images/' + images[randomIndex];
});
