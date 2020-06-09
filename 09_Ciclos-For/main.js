



//Estructura

// for(inicio; limite; secuencia){
//     instruccion
// }

// for(var i = 0;  i <= 10; i = i + 1){
//     // console.log(i)
// }

// Empiece en 0  su  - 200 limite y la secuencia  5
// for(var e = 0;  e >= -200; e = e -5){
//     console.log(e)
// }


// Empeece en 500  su limite 0 y la secuencia 10

// for(var a = 500;  a >= 0; a = a - 10){
//     console.log(a)
// }

// Empiece en -500  su limite 0 y la secuencia 50

// for(var x = -500;  x <= 0 ; x = x +50 ){
//     console.log(x)
// }


//  FizzzBuuz

// --------------------------Challege Cool-----------------
// Del 1 al 100
// Si el numero es divisible entre 3 ----> Fizz
// Si el numero es divisible entre 5 ----> Buzz
// Si el numeor es divisible entre 3 y 5 ---> FizzBuzz

// Ejemplo: 
// 1 
// 2
// 3 Fizz
// 4
// 5 Buzz
// ...
// 15 FizzBuzz
// 16

//Errores

// 15 fizz
// 15 buzz
// 15 fizzBuzz



for(let y = 0; y <= 100; y++){
    if(y % 3 === 0 && y % 5 === 0){
        console.log(y + ': FizzBuzz')
    }else if(y % 5 === 0){
        console.log(y + ' : Buzz')
    }else if( y % 3 === 0){
        console.log(y + ' : Fizz')
    }else{
        console.log(y)
    }
}