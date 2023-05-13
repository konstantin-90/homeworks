//1 Вам потрібно зробити конструктор сутності "Студент".
//2 Студент має ім'я, прізвище, рік народження — це властивості. 
//3 Є масив з оцінками, це також властивість. 
//4 І є можливість отримати вік студента та його середній бал – це методи.
//5 Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – ​​методи.
//6 Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  present() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = true;
    }
  }

  absent() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = false;
    }
  }

  getAge() {
    const now = new Date();
    const thisYear = now.getFullYear();
    return thisYear - this.birthYear;
  }

  getAverageGrade() {
    const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
    return sum / this.grades.length;
  }

  getAttendancePercentage() {
    const presentCount = this.attendance.filter(status => status === true).length;
    return presentCount / this.attendance.length;
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendancePercentage = this.getAttendancePercentage();
    if (averageGrade > 90 && attendancePercentage > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendancePercentage > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}


const student1 = new Student("Іван", "Іванов", 2000);
const student2 = new Student("Олена", "Петренко", 2001);

// Додати оцінки
student1.grades = [85, 90, 95];
student2.grades = [90, 92, 88];

// Відмітити відвідування
student1.present();
student1.present();
student1.absent();

student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();

// Отримати вік та середній бал
console.log(`${student1.firstName} має ${student1.getAge()} років та середній бал ${student1.getAverageGrade()}`);
console.log(`${student2.firstName} має ${student2.getAge()} років та середній бал ${student2.getAverageGrade()}`);

// Отримати відвідуваність та викликати метод summary
console.log(`${student1.firstName} відвідав заняття на ${student1.getAttendancePercentage() * 100}%`);
console.log(student1.summary());

console.log(`${student2.firstName} відвідав заняття на ${student2.getAttendancePercentage() * 100}%`);
console.log(student2.summary());
