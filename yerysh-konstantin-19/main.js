// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
// sum(3) = 3 
// sum(5) = 8
// sum(20) = 28

function chain() { // создал функцию chain. которая принимает параметр
    let value = 0;
    return function(plus) { // функция возвращает функцию с названием plus
        result = value += plus; // функция plus возвращает результат сложения параметра в функции chain и результат самой функции plus
        return result;
    }
}

const myChain = chain();

console.log(myChain(3));
console.log(myChain(12));
console.log(myChain(9));
