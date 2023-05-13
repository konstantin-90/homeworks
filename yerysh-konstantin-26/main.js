const inputShow = document.getElementById('inputShow')

inputShow.onfocus = function() {
  recept.style.display = 'block';
};


inputShow.onblur = function() {
  recept.style.display = 'none';
};
