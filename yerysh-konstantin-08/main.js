const yearBirth = prompt ('enter your year of birth');

const yourCity = prompt('enter your city where you live');
let place;

if (!yourCity) {
  alert('жаль, что не захотел ввести свой любивый вид спорта');
} else {
  switch (yourCity) {
    case "Киев":
      place = 'ты живешь в столице Украины';
      break;
    case "Вашингтон":
      place = 'ты живешь в столице США';
      break;
    case 'Лондон':
      place = 'ты живешь в столице Англии';
      break;
    default:
      place = `ты живешь в городе + ${yourCity}`;
  }
}

const likeSport = prompt('enter your favorite sport(бокс, легкая атлетика, футбол)');
let favSport;

if (!likeSport) {
  alert('жаль, что не захотел ввести свой любивый вид спорта');
} else {
  switch (likeSport) {
    case "бокс":
      favSport = 'круто! Хочешь стать как Мухаммед Али';
      break;
    case 'футбол':
    favSport = 'круто! Хочешь стать как Лионель Месси';
      break;
    case 'легкая атлетика':
    favSport = 'круто! Хочешь стать как Усэйн Болт';
      break;
    default:
      favSport = `Круто, что твой любимый вид спорта ${likeSport}`;
  }
}

alert (`твоя дата рождения ${yearBirth}, ты живешь в городе ${yourCity}. Твоим любимым видом спорта является ${likeSport}`);