import React, {useState} from 'react'

const Formulario = () => {
   
  const [nombre, setNombre] = useState ('')
  const [edad, setEdad] = useState ('')

  const Validar = (event) => { 
       
       event.preventDefault() //con esto capturamos el evento submit del formulario 
  // y evitamos que la pagina se recargue
       
       console.log('Pulsado el boton')

  // Dentro de esta misma funcion procedemos a la validacion de los campos del formulario para eso hacemos:
       
 
       if(!edad.trim()&&!nombre.trim()) {
              console.log('Campos vacios')
              return
       }
       if(!nombre.trim()) {
              console.log('El nombre esta vacio')
              return
       }
       if(!edad.trim()) {
              console.log('La edad esta vacio')
              return
       }
       //The logical AND (&&) operator (logical conjunction) for a set of boolean operands will be true
       // if and only if all the operands are true. Otherwise it will be false.
  }
 
  return (
    <div className='container'>
     
       <form
        onSubmit={Validar} // con onSubmit={Validar} evitamos la recarga de la pagina al enviar los datos
        className="form-group">
        
        <input placeholder="introduce el nombre" 
               className="form-control mb-3 mt-3" 
               type="text" 
               onChange={(e) => {setNombre ( e.target.value) } } //relacionamos los campos de un formulario onChange,
               // la funcion setNombre a traves del evento (e) captura el valor en el imput con e.target.value-
               />
        <input placeholder="introduce la edad" 
               className="form-control mb-3" 
               type="text"
               onChange={(e) => {setEdad ( e.target.value) } }

                />
        <input className="btn btn-info btn-block mb-3"  
              type="submit" 
              />
       </form>
    </div>
   )
} 

export default Formulario