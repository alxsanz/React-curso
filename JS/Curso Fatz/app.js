//document.write("Helloooouuuu")

//  Tipos de datos

 "hello world" // string
 'hello world' // also an string

 // boolean

 true
 false

 // array

//  ['joe','mark']
//  [1, 2 , 3]
//  [true, false, true, false]

 // Objet

 {
    "username"; 'Ryan' ,// key & value..
    "score";  70.4 ,
    "hours"; 14,
    "proffesional"; true
 }

 console.log({      // los objetos van siempre entrre llaves en JS
    "username": 'Ryan' ,
    "score":  70.4 ,
    "hours": 14,
    "proffesional": true
 })    

 var nombredelusuario = "john"

 let apellidousuario = "smith"


 console.log(nombredelusuario)

 
 console.log(apellidousuario)


 let numberOne = 60;
 let numberTwo = 100;

 let result = numberOne + numberTwo;

 console.log(result)

 let completeName = nombredelusuario + ' ' + apellidousuario;
// este proceso es llamado concatenacion por la union de dos cadenas o strings
 console.log(completeName)


let passwordDB = 'pepe123'

let input = 'pepe1ssd23'

let result2 = input == passwordDB;

console.log(result2) /* esto es lo que por ej hace fb 
cuano alguien ingresa el password */

//---------- CONDICIONALES ---------//
/*
if (result2 === true) {
   console.log('Login correcto')
}

if (result2 === false) {
   console.log('Login incorrecto')
}

This example it has two possible outcomes so we can 
write it better with the 'else' conditional

*/

if (result2 === true) {
   console.log('Login correcto')
} else {
   console.log('Login incorrecto')
}

let score = 15;

if (score > 30) {
   console.log( 'You need to practice more')
} else if (score > 13) {
   console.log('You are doing better')
}// si score>30 corre el 'if', 
//caso contrario(cc) si es mayor a 13 el 'else if'
else {
   console.log('you need to follow this tutorial')
}// cc corre entonces el 'else'

/*-------OTRO CONTROL DE FLUJO CONDIDIONAL---------------
--------------------'SWITCH'----------------------------*/

let typeCard ='Debit Card'

switch(typeCard) {
   case 'Debit Card':
      console.log('This is a debit card');
         break;
   case 'Credit Card':   
      console.log('This is a credit card');
         break;   
}  

/*-------------------------------------------------------

                   ITERADOR O BUCLE 
   
---------------------------------------------------------*/

let count = 0;

while(count <= 16 ) {
   console.log(count)
   count++;
}

/*
let count = 1;

while(count > 0 ) {
   console.log(count)
   count++;
}

let count = 1;

while(true) {
   console.log(count)
   count++;
}

EJ BUCLE INFINITO

*/

let names = ['ryan', 'joe', 'john'];

console.log(names[0]) //solo se mostrara el valor 0 (ryan)

console.log(names.length);//se muestra la cant de arrays en la consola

/*

for (let i = 0; i < names.length;) {
   ACA VA EL CODIGO Q QUIERO Q SE EJECUTE
} 

ESTE ES OTRO BUCLE INFINITO, LA UNICA CONDICION ES
(mientras) -> i < names.length; EL CODIGO SE 
EJECUTARA...

*/

for (let i = 0; i < names.length; i++) {
   
   console.log(names[i]); 

} /* poniendo i++ el codigo solo se repetira hasta el 
numero de arrays*/

for (let i = names.length - 1; i >= 0; i--) {
   
   console.log(names[i]); 

} // este me pone los nombres del ulimo al primero


/*------------------------------------------------------------

                          FUNCIONES

-------------------------------------------------------------*/


function greeting(nombre) {
   console.log(nombre)
   console.log('hello');
}
/* como se ve arriba la funcion no se mostrara en 
la consola hasta que la llame*/

greeting() //ahora si ya se puede ver 

greeting('Joselito') /* Ahora se ejecuta la funcion mostrando
                        ademas su parametro (name : 'Joselito') */

function saludar(nombrePersona) {

         console.log( 'Hola ' + nombrePersona)

}

saludar('Felipe');

function add(n1, n2) {
      console.log(n1 + n2)
}

add(3, 2);
add (7888, 955);