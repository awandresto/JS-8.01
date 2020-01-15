'use strict';

/*Задача 0
Составить расписание на неделю. Пользователь вводит
порядковый номер дня недели и у него на экране отображается,
те, что запланировано на этот день*/
const outTask0 = document.getElementById('output_Task_0');
const userSchedule = [
    '<strong>Понедельник</strong> <br>8:00 - Завтрак <br>9:00 - Офис <br>11:00 - Встреча с клиентом <br>13:00 - Обед <br>16:00 - Съездить на обмер <br>19:00 - Ужин',
    '<strong>Вторник</strong> <br>7:00 - Спортзал <br>8:00 - Завтрак <br>9:00 - Офис <br>13:30 - Обед <br>19:00 - Ужин',
    '<strong>Среда</strong> <br>7:45 - Билет на поезд <br>17:00 - Встреча <br>23:50 - Билет на поезд',
    '<strong>Четверг</strong> <br>8:15 - Завтрак <br>11:30 - Спортзал <br>13:30 - Обед <br>15:45 - Печать <br>19:30 - Ужин',
    '<strong>Пятница</strong>  <br>8:00 - Завтрак <br>10:00 - Сдать отчет <br>11:00 - Офис <br>13:00 - Обед <br>15:00 - Встреча <br>19:00 - Ужин',
    '<strong>Суббота</strong> <br>15:00 - Встреча <br>19:00 - Кинотеатр',
    '<strong>Воскресенье</strong> <br>Записей нет.',
    ];
let userDay;

userDay = +prompt('Задача 0 \n\nВведите день недели', '');

if (userDay >= 1 && userDay <= 7) {
    outTask0.innerHTML = userSchedule[userDay-1];
}
else
    outTask0.innerHTML = 'Нажмите [F5] и повторите попытку';


/*Задача 1
Написать программу, вычисляющую стоимость 10 минутного
междугороднего разговора в зависимости от кода города. (
Москва(905) - 4.15руб. Ростов(194) - 1.98руб. Краснодар(491) -
2.69руб. Киров(800) - 5.00руб. )*/
const outTask1 = document.getElementById('output_Task_1');
let callDuration = 10, callCost;

let cityCode = prompt('Задача 1 \n\nВведите код города - Москва(905), Ростов(194), Краснодар(491), Киров(800): ','');

switch (cityCode) {
    case '905':
        callCost = callDuration * 4.15;
        break;
    case '194':
        callCost = callDuration * 1.94;
        break;
    case '491':
        callCost = callDuration * 2.69;
        break;
    case '800':
        callCost = callDuration * 5.00;
        break;
    default:
        break;
}

if (callCost) {
    outTask1.innerHTML = '('+ cityCode +') Стоимость разговора составит: <strong>' + callCost + 'руб.</strong>/' + callDuration + 'мин'; 
}
else outTask1.innerHTML = 'Введен неправильный код. Нажмите [F5] и повторите попытку';


/*Задача 2
В переменной $min лежит число от 0 до 59. Определите в
какую четверть часа попадает это число (в первую, вторую, третью
или четвертую)*/
const outTask2 = document.getElementById('output_Task_2');
let $min = 59;

outTask2.innerHTML = 'Число <strong>' + $min + '</strong> попадает в <strong>' + (~~($min/15)+1) + '-ю</strong> четверть часа';


/*Задача 3
Переменная $num может принимать одно из значений: 1, 2, 3 или
4. Если она имеет значение  '1', то в переменную $result запишем
'зима', если имеет значение '2' – 'лето' и так далее*/
const outTask3 = document.getElementById('output_Task_3');
let $num = prompt('Задача 3 \n\nВведите число от 1 до 4','');
let $result;

switch ($num) {
    case '1':
        $result = 'зима';
        break;
    case '2':
        $result = 'весна';
        break;
    case '3':
        $result = 'лето';
        break;
    case '4':
        $result = 'осень';
        break;
    default:
        $result = 'Вы ввели неверное значение';
        break;
}

outTask3.innerHTML = '<strong>' + $result + '</strong>';


/*Задача 4
Площадь, объем, гипотенуза, элемент последовательности и остаток кредита*/
const outTask4 = document.getElementById('output_Task_4');

let height = 23, 
    width = 10,
    s;

s = height * width;
outTask4.innerHTML = 'Площадь прямоугольника со сторонами <strong>' + height + '</strong>см и <strong>' + width + '</strong>см равна <strong>' + s + '</strong> см2 <br><br>';

//1.
const Pi = 3.1415;
let heightC = 10,
    dC = 4,
    v;

v = Pi * Math.pow(dC/2, 2) * heightC;
outTask4.innerHTML = outTask4.innerHTML + 'Объем цилиндра высотой <strong>' + heightC + '</strong>м и диаметром <strong>' + dC + '</strong>м равен <strong>' + v.toFixed(2) + '</strong> м2 <br><br>';

//2.
let n = 3,
    m = 4,
    k;

k = Math.sqrt(n**2 + m**2);
outTask4.innerHTML = outTask4.innerHTML + 'Гипотенуза прямоугольного треугольника со сторонами <strong>' + n + '</strong> и <strong>' + m + '</strong> равна <strong>' + k.toFixed(2) + '</strong> <br><br>';

//3.
let numFib = [0, 1];

for (let i = 2; i <= 12; i++) {
    numFib[i] = numFib[i-1] + numFib[i-2];
}

outTask4.innerHTML = outTask4.innerHTML + 'Числа Фибоначчи до <strong>12</strong>го элемента: <br>' + numFib +' <br><br>';

//4.
let S = 2, //2 млн. руб.
    p = 10, //10%
    years = 5, //5 лет
    perepl; //переплата по кредиту

perepl = S * (p/100) * 5;
outTask4.innerHTML = outTask4.innerHTML + 'Переплата по кредиту <strong>' + S + '</strong>млн. руб. и ставкой <strong>' + p + '%</strong> на <strong>' + years + '</strong> лет составит <strong>' + perepl.toFixed(2) + '</strong>млн. руб. <br><br>';

/*Задача 5
Напишите скрипт, который используя оператор while выведет все
числа от 45 до 67.
1. Напишите скрипт, который используя
оператор while выведет все числа от 45 до 670, кратные 10.
2. Напишите скрипт, который используя
оператор for выполнит два предыдущих задания*/
const outTask5 = document.getElementById('output_Task_5');
let tmpString = '';

$num = 45;
tmpString = 'Числа от 45 до 67: <br>';

while ($num >= 45 && $num <= 67) {
    tmpString = tmpString + '<strong>' + $num + '</strong> ';
    $num++;
}

//1.
$num = 45;
tmpString = tmpString + '<p></p>Числа от 45 до 670 кратные 10: <br>';

while ($num >= 45 && $num <= 670) {
    if (!($num % 10)) {
        tmpString = tmpString + '<strong>' + $num + '</strong> ';
    }
    $num++;
}
//2.
tmpString = tmpString + '<p></p>Числа от 45 до 67 через цикл for: <br>';
for (let i = 45; i <= 67; i++) {
    tmpString = tmpString + '<strong>' + i + '</strong> ';
}

tmpString = tmpString + '<p></p>Числа от 45 до 670 кратные 10 через цикл for: <br>';
for (let i = 45; i <= 670; i=i+5) {
    if (!(i % 10)) {
        tmpString = tmpString + '<strong>' + i + '</strong> ';
    }
}

outTask5.innerHTML = tmpString;


/*Задача 6
Вводится натуральное число. Найти сумму четных цифр, входящих
в его состав*/
const outTask6 = document.getElementById('output_Task_6');
let summaryEven = 0;

$num = +prompt('Задача 6 \n\nВведите натуральное число: ', '');

for (let i = $num; i > 0; i--) {
    if (!(i % 2)) {
        summaryEven = summaryEven + i;
    }
}
outTask6.innerHTML = 'Для натурального числа <strong>' + $num + '</strong> сумма четных цифр = <strong>' + summaryEven + '</strong>';


/*Задача 7
Калькулятор. X (+, –, /, *) Y = Z*/
let x, y, z, operation;

x = +prompt('Задача 7 \n\nВведите операнд X: ', '');

while (x != 0) {
    operation = prompt(x + ' \n\nВведите знак операции: ', '');

    if (operation === '+' || operation === '-' || operation === '*' || operation === '/') {
        
        y = +prompt(x + operation + ' \n\nВведите операнд Y: ', '');

        while (operation === '/' && y == 0) {
            y = +prompt(x + operation + y + ' \n\nДелить на ноль нельзя! \n\nПовторите ввод операнда Y', '');
        }
                
        switch (operation) {
            case '+':
                z = x + y;
                break;
        
            case '-':
                z = x - y;
                break;

            case '*':
                z = x * y;
                break;

            case '/':
                z = x / y;
                break;
            
                default:
                break;
        }        
        
    }
    else if (operation === '0')
        break;
    else
        continue;
    
    alert('Задача 7 \n\nРезультат вычислений ' + x + operation + y + ' = ' + z);

    x = +prompt('Введите операнд X: ', '');
}


/*Задача 8
Найти сумму нечетных чисел числа 255*/
const outTask8 = document.getElementById('output_Task_8');
let summaryOdd = 0;

for (let i = 255; i > 0; i--) {
    if (i % 2) {
        summaryOdd = summaryOdd + i;
    }
}
outTask8.innerHTML = 'Для числа <strong>255</strong> сумма нечетных чисел = <strong>' + summaryOdd + '</strong>';


/*Задача 9
Необходимо вывести на экран таблицу умножения на 3*/
const outTask9 = document.getElementById('output_Task_9');

outTask9.style.fontFamily = 'Courier New';
$num = 3;

for (let i = 1; i <= 10; i++) {
    outTask9.innerHTML = outTask9.innerHTML + $num + ' x ' + i + ' = ' + $num*i + '<br>';
}


/*Задача 10
Напишите программу, где пользователь вводит любое целое
положительное число. А программа суммирует все числа от 1 до
введенного пользователем числа*/
const outTask10 = document.getElementById('output_Task_10');
let summaryNum = 0;

$num = +prompt('Задача 10 \n\nВведите любое целое положительное число:', '');

for (let i = 1; i <= $num; i++) {
    summaryNum = summaryNum + i;
}

if ($num < 1) {
    outTask10.innerHTML = 'Вы ввели неверное значение';
}
else outTask10.innerHTML = 'Сумма чисел от <strong>' + 1 + '</strong> до <strong>' + $num + '</strong> = <strong>' + summaryNum + '</strong>';

/*Задача 11
Загадка*/
let answerQuiz;

$num = 0;

do {
    answerQuiz = prompt('Задача 11 \n\nЗагадка. Введите правильный ответ:', '');

    if (answerQuiz == 'Троллейбус') {
        alert('Правильно!');
        break;
    }
    else if (answerQuiz == 'Сдаюсь') {
        alert('Правильный ответ: троллейбус');
        break;
    }
    else {
        alert('Подумай еще');
    }

    $num++;
} while ($num != 3);


/*Задача 12
Написать скрипт, который запрашивает 2 числа, начало и конец
диапазона, и в результате выдаёт сумму всех нечетных чисел в
этом диапазоне.*/
const outTask12 = document.getElementById('output_Task_12');

let startRange = +prompt('Задача 12 \n\nВведите число - начало диапазона:', '');
let endRange = +prompt('Введите число - конец диапазона:', '');

outTask12.innerHTML = 'В диапазоне от <strong>' + startRange + '</strong> до <strong>' + endRange + '</strong> сумма нечетных чисел = ';

if (startRange === endRange && startRange % 2) {
    summaryOdd = startRange;
}
else summaryOdd = 0;

while (startRange < endRange) {
    if (startRange % 2) {
        summaryOdd = summaryOdd + startRange;
    }
    startRange++;
}

while (startRange > endRange) {
    if (startRange % 2) {
        summaryOdd = summaryOdd + startRange;
    }
    startRange--;
}

outTask12.innerHTML = outTask12.innerHTML + '<strong>' + summaryOdd + '</strong>';


/*Задача 13
Найти факториал числа, у пользователя запрашивается число, и в результате выдаётся факториал числа*/
const outTask13 = document.getElementById('output_Task_13');

$num = +prompt('Задача 13 \n\nВведите натуральное число: ', '');

let summaryFact = $num;

for (let i = $num-1; i > 0; i--) {
    summaryFact = summaryFact * i;
}

outTask13.innerHTML = 'Факториал числа <strong>' + $num + '</strong> = <strong>' + summaryFact + '</strong>';


/*Задача 14
Написать код на JavaScript, который посчитает, сколько будет 2 в 10 степени с помощью цикла*/
const outTask14 = document.getElementById('output_Task_14');
let summaryPow = 2;

for (let i = 2; i <= 10; i++) {
    summaryPow = summaryPow * 2;
}
outTask14.innerHTML = '2 в 10 степени = <strong>' + summaryPow + '</strong>';