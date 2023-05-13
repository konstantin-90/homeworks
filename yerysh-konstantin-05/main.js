
const operator = prompt('выберете операцию (add, sub, mult, div)');
const numOne = +prompt('введите первое число');
const numTwo = +prompt('введите второе число');

if (operator === 'add') {
    alert (`${numOne} + ${numTwo} = ${numOne + numTwo}`);
} else  if (operator === 'div') {
    alert (`${numOne} / ${numTwo} = ${numOne / numTwo}`);
} else if ( operator === 'mult') {
    alert (`${numOne} * ${numTwo} = ${numOne * numTwo}`);
} else if ( operator === 'sub') {
    alert (`${numOne} - ${numTwo} = ${numOne - numTwo}`);
} else {
    alert ('wrong operation');
};
