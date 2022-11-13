/* Objet Destructuring*/

const Persona = {
    nobmre: 'Manuel',
    edad:37,
    casado:false,
    hijo:{
        nombrehijo:'Alma'
    }
}
const {nombrehijo} = Persona.hijo /*  Si hay objetos unos dentro de otros, con el dot 
operation puedo llegar hasta el padre del cual quiero extraer sus propiedades y guardar dentro 
de una constante esa propiedad o propiedades para trabajar con las mismas (imprimirlas, insertarlas en una base de datos, etc...) */ 


console.log(nombrehijo);