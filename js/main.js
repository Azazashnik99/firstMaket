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

// let num1 = prompt('Введите 1 число: ');
// let num2 = prompt('Введите 2 число: ');
// let num3 = prompt('Введите 3 число: ');

// if(num1 > num2 && num1 > num3){
//     console.log(`Число ${num1} наибольшее`);
// }else if(num2 > num1 && num2 > num3){
//     console.log(`Число ${num2} наибольшее`);
// }else if(num3 > num1 && num3 > num2){
//     console.log(`Число ${num3} наибольшее`);
// }else{
//     console.log(`Числа равны`);
// }

// ДЗ к 17 уроку


fn(11);
function fn(y = 0){
    if(y < 10){
        console.log('Константа меньше 10');
    }else{
        console.log('Константа не меньше 10');
    }
}

//

 const fn1 = () => alert('Hello, World');
 fn1();

 //

 const fn2 = () => console.log('JavaScript');
 fn2();

 //


 fnText('text101');

 function fnText(text){
    // let text = 'lorem';
    if(text == 'lorem'){
        console.log('У вас ошибка в тексте');
    }else{
        console.log('Содержимое текста: ' + text)
    }
 }

 //

 // ДЗ к 18 уроку

 let man = {
    firstName: 'John',
    lastName: 'Marmilon',
    age: 20,
    rise: 180,
    money: '2000$',
    log: 'John_M',
    passw: 1234,
    address: {
        street: 'Lohnes',
        numberr: 550,
    }
 }

 let testString = 'tipa Password';

//  if(testString === man.passw){
//     console.log(`Добро пожаловать ${man.firstName}, ${man.lastName}.Ваш логин: ${man.log}`)
//  }else{
//     console.log(`Указанный пороль не верен${testString}. Попробуйте еще раз`)
//  }

fnMan('tipa Password');

 function fnMan(testString){
    if(testString === man.passw){
        console.log(`Добро пожаловать ${man.firstName}, ${man.lastName}.Ваш логин: ${man.log}`)
     }else{
        console.log(`Указанный пороль не верен ${testString}. Попробуйте еще раз`)
     }
 }

 //

 // Цикл for > while; for(let i = 0;i < 3;i++) // с 1 до 10 через while


 let j = 1;
 while(j <= 10){
    console.log(`Число: ${j}`);
    j++;
 }

 // Дз 19 было сделанно на практике (тесте)

 //     //1
//     let name = 'Khamzat';
//     //2
//     //string
//     //3 
//     const age = 18;
//     //4
//     let q = age < 15 ? 'Доступ запрещен' : `Привет ${name}`;
//     console.log(q);
//     //5
//     viewMoney();
//     function viewMoney(){
//         console.log('Вот вам 10$');
//     }
//     //6
//     getMoney('Вот вам 10$'); //x
//     function getMoney(x){
//         return x;
//     }
//     //7 
//     getMoney(100); //cash
//     function getMoney(cash = 0){
//         return cash;
//     }
//     //8
//     getNumber(2);
//     function getNumber(j = 0){
//         console.log(j**j);
//     }
//     //9
//     getNumbers(2,10,4);
//     function getNumbers(j = 0,u = 0, p = 0){
//         if(j > u && j > p){
//             console.log(`Наибольшее число: ${j}`);
//         }else if(u > j && u > p){
//             console.log(`Наибольшее число: ${u}`);
//         }else if(p > j && p > u){
//             console.log(`Наибольшее число: ${p}`);
//         }else{
//             console.log(`Все числа равны`);
//         }
//     }
// //10
//     getDiscr(1,5,5);
//     function getDiscr(a = 0,b = 0, c = 0){
//         let d = (b**2)-(4*a*c);
//         if(d > 0){
//             console.log(d);
//         }else{
//             console.log((-b)/2*a)
//         }

//     }
//     //11
//     getChet(4,5);
//     function getChet(m = 0,n = 0){
//         if(m % 2 == 0 && n % 2 == 0){
//             return m*n;
//         }else if(m % 2 == 1 && n % 2 == 1){
//             return m + n;
//         }else if(m % 2 == 0 && n % 2 != 0){
//             console.log(n);

//         }
//     }
// 


 // ДЗ 20

 //найти длину -
 let arr1 = ['lorem', 123,true, 'ipsum'];
 console.log('Длина массива: ' + arr1.length);

 //

 let arr2 = ['lorem', 123,true, 'ipsum'];
 console.log(`Первый элемент: ${arr2[0]}; Последний элемент: ${arr2[arr2.length - 1]}`);

 //

 console.log('');
 console.log('Тут начало массива em');
 let em = ['lorem','Expo','CS2',3.14, 777,];
//  em.forEach(element => {console.log(element);});
 console.log(em.push('доб.элемент в конец'), em);
 console.log(em.unshift('доб.элемент в начале'), em);
 console.log(em.shift(), em); // извлекает первый элемент и двигает элем с 1 индекса на 0 индекс
 console.log(em.pop(), em); // извлекает последний элемент
//  console.log(delete em[2], em); // удаляет элемент с указанного индекса и оставляет после себя место 'empty'

 //Я исп начальные методы для работы с массивами

 //

 // доб в начало em 3 новых элемента

 console.log(em.unshift('1 элем', '2 elem', '3 elem'), em);


 // удалить в начале 1 элем и 2 в конце

 console.log(em.splice(0,1),em.splice(5,2), em);
 // удаляет в диапазоне от индекса до выбр элемента( в самом массиве не создавая копию массива )

 // вывести числа из массива четными 

console.log('');
console.log('Тут будут четные числа:');
 let arrNumber = [1, 3 ,5 ,7 ,9];

for(let chetNum of arrNumber){
        chetNum++;
        console.log(chetNum);
}


//удаление элемента с середины и изм элементов

let arr3 = [1,2,3,4,5,6,7,8,9];
console.log(arr3.splice(4,1,'-5')); 
arr3[0] = -1;
console.log(arr3);



//21 дз

//вывод нечет чисел из массива

let arr4 = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100]
let arr5 = arr4.filter(function(item){ 
    return item % 2 == 1;
});
console.log(arr5);

// if((item % 2) === 1){
//     return item;
// }else{
//     return 0;
// }


//вывести элем у которых символы <= 4

let stringArray = ['lorem ipsum', 'javascript', 'php', 'css', 'react','git','html','mysql'];

let arr6 = stringArray.filter(function(item){
    return item.length <= 4;
});
console.log(arr6);

// в новом массиве только отриц числа

let arr7 = [1, -3, 5, 6, -7, 8, 9, -10];
let arr8 = arr7.filter(function(item){
    return item < 0;
});
console.log(arr8);

// чет элем массива

let arr9 = arr4.filter(function(item){
    return item % 2 == 0;
});
console.log(arr9);

//

let arr10 = [5,6,7,8,9]
let arr11 = arr10.map(function(item){
    return item ** 2;
})
console.log(arr11);

//сумма свойств объекта 

let arr12 = [{a:10,b:5},{a:20,b:22},{a:131,b:55}]
let arr13 = arr12.map(function(item){
    return item.a + item.b;
})
console.log(arr13)

//сумма отриц чисел

let arr14 = [-13, 0, 12, 1662, -0.32, -102, -2]
let arr15 = arr14.filter(function(item){
    return item < 0;
})
console.log(`Все отриц числа который вывел filter- ${arr15}`);
let arr16 = arr15.reduce(function(sum,item){
    return sum + item;
},0)
console.log(arr16);

//сумма х свойств

let arr17 = [{x:10,b:"lorem"},{x:21,b:"lorem"},{x:156,b:"lorem"}]
let arr18 = arr17.reduce(function(sum,item){
    return sum +  item.x;
},0)
console.log(arr18);

// 22 дз тест 

// const cities = [
//     {name: 'Москва', population: 12506468},
//     {name: 'Санкт-Петербург', population: 5351935},
//     {name: 'Новосиб', population: 1612833},
//     {name: 'Калининград', population: 482443},
//     {name: 'Калуга', population: 336726}
// ]
// //1
// cities.unshift({name:'Grozny', population: 20415739});
// cities.push({name:'Moon', population: 0});
// console.log(`Город: ${cities[0].name} Население: ${cities[0].population}`);
// console.log('');
// //2
// for (const obj of cities) {
//     console.log(`Город: ${obj.name} Население: ${obj.population}`);
// }
// //3
// let newArr = cities.filter(element => (element.population > 1000000));
// console.log(newArr);
// //4
// let newArr2 = cities.map(item => item.population * 1.5);
// console.log(newArr2);
// //5
// let newArr3 = cities.reduce(function(sum,item){
//     return sum + cities.population;
// },0)
// console.log(newArr3);

//6
let newObjTen = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
      "userId": 1,
      "id": 6,
      "title": "dolorem eum magni eos aperiam quia",
      "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
      "userId": 1,
      "id": 7,
      "title": "magnam facilis autem",
      "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
      "userId": 1,
      "id": 8,
      "title": "dolorem dolore est ipsam",
      "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
      "userId": 1,
      "id": 9,
      "title": "nesciunt iure omnis dolorem tempora et accusantium",
      "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
      "userId": 1,
      "id": 10,
      "title": "optio molestias id quia eum",
      "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    }]
let newArr5 = newObjTen.filter(function(item){
  return item.id > 5;
})
console.log(newArr5);
newObjTen.title = 'Expo';
console.log(newObjTen.body);
console.log(newObjTen.title);

//23

let arr_1 = [101,202,303,404,505]
let arr_2 = [606,707,808,909]
let superArr = [...arr_1, ...arr_2]
console.log(superArr);

//

Math.min(...superArr)
console.log(Math.min(...superArr));

//

const objWh = {
    width:300,
    heigth:550,
}
const copyObjWh = {
    ...objWh,
}
console.log(copyObjWh);


copyObjWh.multiplic = function(){
    return copyObjWh.width * copyObjWh.heigth
}
console.log(copyObjWh.multiplic());

//

function mult() {
    let s = 0;
    if(arguments.length==0) return 0;
    for(let i = 0; i<arguments.length; i++) 
    s += arguments[i];
    return s
  }
console.log(mult(1,4,5,6,7,8));
//сделал через условный оператор


//24



