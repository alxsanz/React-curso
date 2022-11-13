import React, {useState} from "react";
import uniqid from 'uniqid'

const Listadonombres = () => {

    //afuera del return va la logica, dentro del return lo q se renderiza

    const [nombre, setNombre] = useState('')
    const [listadenombres, setListadeNombres] = useState([])
    const [modoEdicion, setmodoEdicion] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)
 


    const addNombre = (e) => {
        e.preventDefault()
        if (!nombre.trim()){
            setError('El nombre estra vacio');
        return
        } 
        const nuevoNombre = { 
            id:uniqid(),
            tituloNombre:nombre
        }
        setListadeNombres([...listadenombres,nuevoNombre])
        setNombre('')
        setError(null)
    }
    const deleteNombre = (id) =>{
        const nuevaArray =  listadenombres.filter( item => item.id !== id)
        setListadeNombres(nuevaArray)
    }
    const editar = (item) => {
        setmodoEdicion(true)
        setNombre(item.tituloNombre)
        setId(item.id)
    }
    const editarNombre = (e) => {
        e.preventDefault()
        const NuevoArray = listadenombres
        .map(item => item.id === id ? {id:id, tituloNombre:nombre}: item)
        setListadeNombres(NuevoArray)
        setmodoEdicion(false)
        setNombre('')
    }


       

    return (
        <div className="container">
            <h2>Holisss .... Aplicacion Crud básica</h2>

            <div className="row">
                    <div className="col">
                        <h2>Listado de nombres</h2> 
                        <ul className="list-group">
                           {
                             listadenombres.map(
                                item => <li key="{item.id}" className="list-group-item"> {item.tituloNombre}
                                   
                                     <button className="btn btn-danger float-end"
                                     onClick={() => {deleteNombre(item.id)}}>

                                        BORRAR

                                     </button>
                                    
                                     <button className="btn btn-info float-end mx-2"
                                      onClick={() => {editar(item)}}> {/* sin .id puede recoger el 'item' completo; 
                                                                        uno es el id y el otro es el tituloNombre*/}

                                        EDITAR

                                     </button>
                                
                                 </li>
                             )
                           }

                        </ul> 

                    </div>
                    <div className="col">
                        <h2>Formulario de nombres</h2>
                                <form 
                                onSubmit={modoEdicion ? editarNombre : addNombre} 
                                className="form-group"
                                >
                                    <input 
                                    onChange={ (e) => {setNombre(e.target.value)} } 
                                    className="form-control mb-4" type="text" 
                                    placeholder="introduce el texto"
                                    value={nombre}
                                    />
                                    <input 
                                    className="btn btn-info btn-block" 
                                    type="submit" 
                                    value={modoEdicion ? 'EDITAR NOMBRE' : 'REGISTRAR NOMBRE' } 
                                    />
                                </form> 
                                {
                                    error != null ? (
                                            <div className="alert alert-danger mt-2">
                                                {error}
                                            </div>
                                    )
                                    :
                                    (

                                        <div></div>

                                    )
                                }
                    </div>
            </div>

        </div>
    )
}

export default Listadonombres;