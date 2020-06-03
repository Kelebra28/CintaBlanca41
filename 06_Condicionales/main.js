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

var edad = Number(prompt('Ingresa tu edad')) 

if(edad >= 18 && edad <= 70 ){
    console.log('Puedes sacar tu licencia')
}else if(edad === 16 || edad === 17){
    console.log('Puedes sacar tu permiso para conducir')
}else if(edad <= 15 || edad >= 71){
    console.log('No puedes conducir por tu seguridad y la de los demas')
}else{
    console.error('Datos incorrectos, intentalo de nuevo')
}