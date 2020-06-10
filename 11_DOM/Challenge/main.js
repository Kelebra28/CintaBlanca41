// Formulario para pedir pizza, 

// -Nombre
// -Direccion
// -Telefono
// -Pinia o sin pinia
//Inputs
let Pnombre = document.getElementById('Pnombre')   
let Pdireccion = document.getElementById('Pdireccion')   
let Ptelefono = document.getElementById('Ptelefono')   
let Ppinia = document.getElementById('Ppinia')   

// p
let Rnombre = document.getElementById('Rnombre')   
let Rdireccion = document.getElementById('Rdireccion')   
let Rtelefono = document.getElementById('Rtelefono')   
let Rpinia = document.getElementById('Rpinia')   

//CARD
let card = document.getElementById('card')

//button
let boton = document.getElementById('boton')   

const ordenar = () => {

    Rnombre.innerHTML = Pnombre.value
    Rdireccion.innerHTML = Pdireccion.value
    Rtelefono.innerHTML = Ptelefono.value
    Rpinia.innerHTML = Ppinia.value

    // classList me permite acceder a todas las clases de mi etiqueda.
    // console.log(card.classList)
    card.classList.remove('none')
    

}

boton.addEventListener('click', ordenar)