//Написать программу, которая будет выводить в консоль сообщение ДА, если сумма переменной а + б будет больше 15, 
//и выводить сообщение НЕТ, если сумма этих чисел будет меньше или равно 15



let a = prompt('Введите переменную a')
let b = prompt('Введите переменную b')

a=+a
b=+b

let c = a + b

//ВАРИАНТ1

if (c > 15) {
console.log( 'ДА' );
}
else {
    console.log( 'НЕТ' );
}


//ВАРИАНТ2

let result = (c > 15) ? "ДА" :"НЕТ"
console.log( result );

//Написать программу, которая должна выполнить проверку значений 2 переменных и, если они равны, 
//то выводить сообщение в консоль о том, что они равны или получать результат true, 
//в противном случае false, при этом в обе переменные можно вписать разные типы данных,
//это нужно учесть и задействовать оператор строгого равенства при сравнении

let x = 8
let y = 8


//ВАРИАНТ1
console.log(x===y);

//ВАРИАНТ2

let boo = (x===y)

if(boo){
    console.log(boo||"Равенство подтверждено")
}
else{
    console.log(boo)
};