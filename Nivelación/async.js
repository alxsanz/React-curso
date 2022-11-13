/*fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then( response => response.json())
 .then( json => console.log(json.userId))
 catch( e => console.log(e);)   Así trabajabamos con fetch...*/


 const obtenerUsuario = async() => {
     try{
        
        /*dentro de try es todo lo que se va a ejecutar*/

        const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const datos = await respuesta.json()
        console.log(datos);
     
    }catch(e) {
         
        /* dentro de catch los errores que se van a ejecutar si hay
        algún error dentro de try...*/
         
         console.log(e);
     }
 }

 obtenerUsuario()

 /* async y await genera un hilo independiente a la ejecución del programa que está
 corriendo, independientemente de los resultados que devuelva lo metera dentro del hilo 
 principal del programa y de esa forma se evita detener la ejecuccion del mismo*/