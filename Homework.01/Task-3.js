/*Вводятся три разных числа. Найти, какое из них является средним (больше одного, но меньше другого).*/

let userNumber1,
    userNumber2,
    userNumber3;

userNumber1 = +prompt('Введите первое число:', '');
userNumber2 = +prompt('Введите второе число:', '');
userNumber3 = +prompt('Введите третье число:', '');

if ((userNumber1 > userNumber2 && userNumber1 < userNumber3) || (userNumber1 < userNumber2 && userNumber1 > userNumber3)) {
    alert('Среднее число ' + userNumber1);
}
else if ((userNumber2 > userNumber1 && userNumber2 < userNumber3) || (userNumber2 > userNumber3 && userNumber2 < userNumber1)) {
    alert('Среднее число ' + userNumber2);
}
else alert('Среднее число ' + userNumber3);