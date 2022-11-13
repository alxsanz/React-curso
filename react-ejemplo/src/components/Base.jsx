import React, {useState, useEffect} from 'react'


const Base = () => {

    const [nombre, setnombre] = useState('Pedro')

    useEffect( ()=> 
      {
        setTimeout(() => {
          
            setnombre('Alex')

        }, 2000);
      }
    )

  return (
    <div>
        <h1> Pagina principal base/ </h1>
        {nombre}
    </div>
  )
}

export default Base