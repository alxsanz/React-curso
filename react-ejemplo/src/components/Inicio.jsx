
import React from 'react'
import { useParams } from 'react-router-dom'

const Inicio = () => {
  const {nombre, edad, id} = useParams()

  return (
    <div>
        <h1>
            Pagina de inicio
        </h1>
        <p>{nombre}</p>
        <p>{edad} </p>
        <p>{id} </p>
    </div>
  )
}

export default Inicio