// alert('Holaaaa')



// if(condicion){
//     accion en caso que sea verdad
// }else{
//     accion en caso que sea falso
// }

var num = 10
//   ---------------Operadores relaciones ---------------------
//   < menor que
//   <= menor igual
//   > mayor que
//   >= mayor igual
//   == comparar -> nunca lo usen
//   === comparar identicamente
//   !== difente de 



// if(num !==  10){
//     console.log('Es verdad')
// }else{
//     console.log('Es falso')
// }

// ------------------------- Challenge 1-------------------
// Investigar que es el MODULO -> % <-
//Si un numero es par o impar 
// P.d este numero lo tiene que dar el usiario.

// var preguntaNumero = prompt('Ingresa cualquier numero')
// var numReal = Number(preguntaNumero)

// if(numReal % 2 === 0){
//     console.log(numReal + ': es par')
// }else if(numReal % 2 === 1){
//     console.log(numReal + ': es impar' )
// }else{
//     console.error('Es un error, por favor checa tus datos')
// }



// ------------------------- Challenge 2-------------------
//Decir si el usuario puede pasar o no
//Password : perritoSalchicha123

// var login = prompt('Ingresa tu contraseña')

// if(login === 'perritoSalchicha123'){
//     console.log('Bienvenido!')
// }else{
//     console.log('password incorrecta')
// }

//------------Operdadores Logicos-------

//And && obliga a que las 2 condiciones sean true
// OR \\ si uno se cumple nos arroja un true, si ninguno se cumple es false

//  Edad para no conducir 0 ->15 y 71 ->
// Edad para sacar persmiso 16 o 17
// Edad para menejar 18 -> 70

// var edad = Number(prompt('Ingresa tu edad')) 

// if(edad >= 18 && edad <= 70 ){
//     console.log('Puedes sacar tu licencia')
// }else if(edad === 16 || edad === 17){
//     console.log('Puedes sacar tu permiso para conducir')
// }else if(edad <= 15 || edad >= 71){
//     console.log('No puedes conducir por tu seguridad y la de los demas')
// }else{
//     console.error('Datos incorrectos, intentalo de nuevo')
// }


//---------------------- Piedra papel o tijera -------------
// 2 jugadores  ----> propts
//Consola mostrar que jugador gano.

// ---> .toUpperCase()   -> todo a mayuscula
// ---> .toLowerCase()  -> todo a minuscula


// var player1 = prompt('Elige piedra, papel o tijera').toLowerCase()
// var player2 = prompt('Elige piedra, papel o tijera').toLowerCase()
// // console.log(player1)
// console.log(player2)

// if(player1 === player2){
//     console.log('Empate')
// }else if(player1 === 'papel' && player2 === 'piedra' || player1 === 'tijera' && player2 === 'papel' || player1 === 'piedra' && player2 === 'tijera' ){
//     console.log('Gana player 1')
// }else if(player2 === 'papel' && player1 === 'piedra' || player2 === 'tijera' && player1 === 'papel' || player2 === 'piedra' && player1 === 'tijera'){
//     console.log('Gana jugador 2')
// }else{
//     console.error('Algo no salio como se esperaba')
// }

//---------- 💩 PPT Complicado 💩 -------- >

var userAnswer = prompt('Ingresa Piedra, Papel o Tijera').toLowerCase()

//PC
var pcAnswer = ''

// Math es el metodo de js para usar funciones matematicas
// .floor --> regresa el minimo o el maxio ----> (0, 5) regresa *0, 1, 2, 3, 4, 5 *
let options = Math.floor((Math.random() * 3) + 1 )

if(options === 1){ pcAnswer = 'piedra' }
if(options === 2) { pcAnswer = 'papel' }
if(options === 3) { pcAnswer = 'tijera' } 

if(userAnswer === pcAnswer){
    console.log('Es un empate porque: ')
    console.log('User: ' + userAnswer)
    console.log('PC: ' + pcAnswer)
}else if(pcAnswer === 'papel' && userAnswer === 'piedra' || pcAnswer === 'tijera' && userAnswer === 'papel' || pcAnswer === 'piedra' && userAnswer === 'tijera' ){
    console.log('Gana la PC porque :')
    console.log('User: ' + userAnswer)
    console.log('PC: ' + pcAnswer)
}else if(userAnswer === 'papel' && pcAnswer === 'piedra' || userAnswer === 'tijera' && pcAnswer === 'papel' || userAnswer === 'piedra' && pcAnswer === 'tijera'){
    console.log('Gana la User porque :')
    console.log('User: ' + userAnswer)
    console.log('PC: ' + pcAnswer)
}else{
    console.error('Ingresa bien tus opciones')
}