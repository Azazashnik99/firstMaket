// ДЗ к 14 уроку


let firstInt = 4;
let secondInt = 10;

console.log('Дз к ' + (firstInt + secondInt) + ' уроку.')

// alert('Дз к ' + (firstInt + secondInt)+ ' уроку.')


//Неправильное написание имени переменной:

let FirstInt = 4;
let SecondInt = 10; // типа не соблюдается "camelCase"

// let firstInt = 45;
// let secondInt = 67;  ( нельзя присваивать уже существующим переменным значения )

firstInt = 14;
secondInt = 41;




// ДЗ к 15 уроку 

let date = '28.02.1999'; // string
console.log('date относится ' + typeof date + ' (строчный тип данных)');

let pi = 3.14; // number
console.log('pi относится к ' + typeof pi + ' (числовой тип данных)');


const conInt = 100;
// conInt = 20;
console.log( conInt );

//

let addres = prompt('Ваш адрес?');
let name = prompt('Ваше Имя?');
let phone = prompt('Номер телефона?');

console.log(`Студент ${name}, адрес: ${addres}, номер телефона: ${phone}`)

//
// let rub = prompt('rub?');
let rub = 80;
let doll = 100;
console.log("За " + rub + " рублей вы получите " + doll/rub + " долларов, с курсом " + doll + " на " + rub);


//ДЗ к 16 уроку

const constInt = 100;
if(constInt < 10){
    console.log('константа меньше 10');
}else{
    console.log('константа не меньше 10');
}

//Примеры с урока:

console.log('Start');

let a = 4;
let b = 5;

if(a < b){ // в этом моменте а < b и результат дал true, при сравнивании их результат даст false и не выведит Loading...
    console.log('Loading...');
}

console.log('end');

//


let name1 = 'Khamzat';
let name2 = 'khamzat';

if(name1 > name2){  // выводится name2 тк буква k больше по таблице "ASCII"
    console.log('Khamzat, с заглавной K');
}else{
    console.log('khamzat, строчная k');
}


//

let nameBD = 'Khamz';
let passwordBD = 'Kh95';

let nameBd = prompt('login?');
let passwordBd = prompt('password?');

if(nameBD === nameBd && passwordBD === passwordBd){
    console.log('Welcome');
}else{
    console.log('Error in login or password');
}

//

if(10 > 11){
    console.log('10');
}else if(11 < 10){
    console.log('11');
}else if(20 > 10){
    console.log('else if вывел: 20');
}else{
    console.log('else == null');
}

//

//let a = 4;

switch(a){
    case 1:
        console.log('1');
        break;
    case 2:
        console.log('2');
        break;
    case 3:
        console.log('3');
        break;
    case 4:
        console.log('switch выведит это: 4');
        break;
    case 5:
        console.log('5');
        break;
    default:
        console.log('default');
}

//

let c = 7 > 5 ? 'yes' : 'no';
console.log('Тернарный оператор выводит: ' + c);


// тернарный оператор с дз:

let x = 10;
let y = 7;
let answer = x > y ? 'x больше чем y' : 'x не больше чем y';


//четное и нечетное число

let num = prompt('Задание на четность, введите число: ');
if(num % 2 === 0){
    console.log(`Число ${num} четное`);
}else{
    console.log(`Число ${num} не четное`);
}

//

let num1 = prompt('Введите 1 число: ');
let num2 = prompt('Введите 2 число: ');
let num3 = prompt('Введите 3 число: ');

if(num1 > num2 && num1 > num3){
    console.log(`Число ${num1} наибольшее`);
}else if(num2 > num1 && num2 > num3){
    console.log(`Число ${num2} наибольшее`);
}else if(num3 > num1 && num3 > num2){
    console.log(`Число ${num3} наибольшее`);
}else{
    console.log(`Числа равны`);
}