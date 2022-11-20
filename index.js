// homework
// 1) Написати функцію, яка запитує в користувача число з діапазону до тих пір, доки він його не введе
// функція брудна, приймає початок і кінець діапазону, а повертає виключно коректне число числового типу!!!!!!


const EnterYourNumber = function (start = 55, end = 155) {
  while (true) {
    const num = prompt("enter your number");
    if (
      isNaN(Number(num)) ||
      num === null ||
      num === "" ||
      (num === " " && num >= start && num <= end)
    ) {
      continue;
    }
    return num;
  }
};
console.log(EnterYourNumber());

// 2) Написати скрипт, який виводить числа (числа повинні бути парними і кратними 9) з діапазону від 0 до 100 у зворотньому порядку.


const START = 0;
const FINISH = 100;
for (let i = FINISH; i >= START; i--) {
  if (i % 2 === 0 && i % 9 === 0)
  console.log(i);
}

// 3) Створити функцію конструктор, яка описує користувача:
// -ім'я
// -прізвище
// -вік
// - метод, який логує ім'я та прізвище разом

function Client(firstName, secondName, age) {
  this.firstName = firstName;
  this.secondName = secondName;
  this.age = age;
  logOnlyFirstAndSecondName = function () {
    console.log('your client is' , firstName , secondName)
  }
}

const client = new Client("Kuriniy", 'Olexandr', 28);
console.log(client);
console.log(logOnlyFirstAndSecondName());
