import React, {Fragment} from "react";

function Hello() {
    let saludo = 'Variable saludo'
    return ( 
        <Fragment>
        <h2> Componente de app llamada Hello {saludo} </h2>
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Error reiciendis quidem nesciunt ea corporis, neque officia,
          odio cupiditate blanditiis ullam modi placeat similique a deserunt?
         Dolorem enim adipisci quasi magni.</p>
        </Fragment>
    )
}

export default Hello