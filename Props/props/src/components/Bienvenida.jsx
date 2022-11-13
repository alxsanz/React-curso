import React from "react";


const Bienvenida = (props) => {
    console.log(props)
    const {nombre} = props
    /* Esta constante {nombre} entre llaves
    se llama objet destructuring, lo que quiere decir
    que de 'props' solo quiero usar el atributo 
    "nombre", si necesito mas puedo ir sumando 
    separando mediante comas {nombre,  apellido, etc}
    */
  
    return( 
     <div>

        <h2>Bienvenido {nombre} </h2>    
        
    </div>
  )
}

export default Bienvenida