// un objeto se define exactamente igual que una variable

const Persona = {
   nobmre: 'Manuel',
   edad:37,
   casado:false,
   hijo:{
       nombrehijo:'Alma'
   }
}/*las llaves le dicen a javascript que estamos trabajando con un objeto.*/

console.log(Persona);
console.log(Persona.nobmre);
console.log(Persona.casado);/* De esta forma accedemos a las propiedades mediante el "dot operation"*/

console.log(Persona.hijo.nombrehijo);


