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



if(num !==  10){
    // console.log('Es verdad')
}else{
    // console.log('Es falso')
}

// ------------------------- Challenge 1-------------------
// Investigar que es el MODULO -> % <-
//Si un numero es par o impar 
// P.d este numero lo tiene que dar el usiario.

var preguntaNumero = prompt('Ingresa cualquier numero')
var numReal = Number(preguntaNumero)

if(numReal % 2 === 0){
    console.log(numReal + ': es par')
}else if(numReal % 2 === 1){
    console.log(numReal + ': es impar' )
}else{
    console.error('Es un error, por favor checa tus datos')
}



// ------------------------- Challenge 2-------------------
//Decir si el usuario puede pasar o no
//Password : perritoSalchicha123

