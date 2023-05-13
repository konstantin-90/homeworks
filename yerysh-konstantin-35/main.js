const form = document.getElementById('registration__form');
const table = document.getElementById('data');
const button = document.querySelector('btn-primary');

function isValidDate(dateString) {
  const regex = /^\d{4}$/;
  if (!regex.test(dateString)) {
    return false;
  }
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return false;
  }
  return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const firstName = document.getElementById("first__name").value;
  const lastName = document.getElementById("last__name").value;
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const city = document.getElementById("city").value;
  const address = document.getElementById("address").value;
  const languages = document.querySelectorAll('input[name="languages"]:checked');
  
  
  const selectedLanguages = [];
  languages.forEach((checkbox) => {
    selectedLanguages.push(checkbox.value);
  });
  
  const errors = [];
  if (!firstName) {
    errors.push('Не указано имя');
  }
  if (!lastName) {
    errors.push('Не указана фамилия');
  }
  if (!isValidDate(birthdate)) {
    errors.push('Некорректная дата рождения');
  }
  if (!city) {
    errors.push('Не указан город');
  }
  if (errors.length > 0) {
    alert(errors.join('\n'));
    return;
  }
  
  const row = table.insertRow();
  
  row.insertCell().textContent = firstName;
  row.insertCell().textContent = lastName;
  row.insertCell().textContent = birthdate;
  row.insertCell().textContent = gender;
  row.insertCell().textContent = city;
  row.insertCell().textContent = address;
  row.insertCell().textContent = selectedLanguages;
  
  form.reset();
})