  import React,{useState} from 'react'
  
  const Temperatura = () => {
    
    const [temperatura, setTemperatura] = useState(19)
    const Subir = () => {
        setTemperatura (temperatura + 1)

    }    
    const Bajar = () => { 
            setTemperatura (temperatura - 1)    
    }


    return (
      <div className='container'>
        <h2> La temperatura es: {temperatura} </h2>
        <p>
            {
                temperatura > 21 ? 'Una calorrrr' : 'Ta frescoli'
            }
        </p>
        <div className='d-grid gap-2 col-6 mx-auto'>
        <button className='btn btn-success btn-block' onClick={Subir}>Aumentar temperatura</button>
        <button className='btn btn-success btn-block' onClick={Bajar}>Reducir temperatura</button>
        </div>
      </div>
    )
  }
  
  export default Temperatura