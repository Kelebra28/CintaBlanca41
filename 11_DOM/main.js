// getElementById busca el id en nuestro archivo HTML
let titulo = document.getElementById('titulo')
let texto = document.getElementById('texto')
let boton = document.getElementById('boton')

console.log(titulo)
console.log(texto)

const cambio = () => {

//Pinta en la etiqueta el valor dado
titulo.innerHTML = 'Titulo cambiado desde JS'
texto.innerHTML = 'Texto cambiado desde JS'

}
// addEventListener escucha los eventos de HTML
//El primer parametro es el evento
//Segundo parameto es la funcion que queremos ejecutar

boton.addEventListener('click', cambio)

