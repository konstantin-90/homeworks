const numOrStr = prompt ('input number or string');

switch(true) {
    case numOrStr === null:
      alert('ви скасували');//я тут специально вместо console.log поставил alert. чтобы убедится что работает коректно в swith
      break;

    case numOrStr.trim() === '':
      alert('Empty String');
      break;

    case isNaN( +numOrStr):
      alert('number is Ba_NaN');
      break;

    default:
        alert('OK!');
        break; 
}