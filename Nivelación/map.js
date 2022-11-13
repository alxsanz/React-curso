/* Función map, se emplea en varios frameworks como react,vue,angular,etc...*/

const datos = [
    {nombre:'Manuel', edad:37},
    {nombre:'Victoria', edad:20},
    {nombre:'Javier', edad:57},
    {nombre:'Sofia', edad:22},
]

datos.forEach( elemento => {
    console.log(elemento.nombre);
})


datos.map( elemento => {
    console.log(elemento.edad);
})
/* la funcion map funciona exactamente igual que forEach con la diferencia que se 
ejecuta mucho mas rapido*/