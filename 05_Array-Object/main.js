// alert('Hola')
//Arreglos nos permiten almacenar diferntes valores
//               0         1       2        3        4        
var colores = ['negro', 'rojo', 'rosa', 'azul', 'amarillo']

//Viejita
colores[5] = 'verde'
// colores[2] = 'blanco'


console.log(colores)
// console.log(colores[2])

//metodo de arreglos

//.push() -> agrega un nuevo valor al final

colores.push('gris', 'dasdfasf')

console.log(colores)

// .pop() -> borra nuesto ultimo valor

colores.pop()

console.log(colores)

// .splice -> borra elementos especificos

//primer numero es la posicion   
// segundp numero son los elemtos a borrar         
colores.splice(4, 1)
//truquitp el 3 elemento remplaza el que se borro
colores.splice(1, 1, 'violoeta')
// console.log(colores)

//Objetos

var persona = {

    nombre: 'Ricardo',
    cel: '45645647894',
    direccion: 'CDMX',
    email: 'kelebra@devf.mx',
    password: '123456',
    musica: ['rock', 'corridos tumbados', 'cumbia', 'pop', 'k-pop', 'trap'],
    peliculas : {
        accion: ['R&F', 'MI', 'El trasportador'],
        survivalHorror:['Chuky', 'blair wich', 'El exorsista'],
        comedia: ['This is my son','scary movie', 'click' ],
        romanticas: {
            comediasRomanticas: ['La propuesta', 'Zohan'],
            tristeza: ['Titanic', 'Robando a la novia', 'Cartas a Jhon']
        }
    }

}

// console.log(persona)
// console.log(persona.nombre)
// console.log(persona.password)
// console.log(persona.musica[1])
// console.log(persona.peliculas.romanticas.comediasRomanticas[1])

//No tan recomendable
// var dulces = [
//     'cajeta',
//     {
//        picantes: 'pika fresa' 
//     }

// ]
// console.log(dulces[1].picantes)