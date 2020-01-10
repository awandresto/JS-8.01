/*Определить количество дней в году, который вводит пользователь.*/

let userYear;

userYear = +prompt('Введите любой год от рождества христова:', '');

if (!(userYear % 4) && (userYear % 100) || !(userYear % 400)) {
    alert(userYear + ' этот год высокостный (366 дней)');
}
else alert(userYear + ' в этом году 365 дней');