import React from "react";
import Bienvenida from "./components/Bienvenida";
import Cards from "./components/Cards";

function App() {
  return (
   <div>
    <h1>Propiedades de los componentes.</h1>
    <Bienvenida nombre="Manuel"/>
    <Bienvenida nombre="Victoria"/>
    <Bienvenida nombre="Jose"/>
    <Bienvenida nombre="Maria"/>


    <hr />
    <div className="row">
       <div className="col">
         <Cards
           imagen="https://picsum.photos/200/300"
           titulo="Titulo card 1"
           texto="Texto de la card 1"
          />
       </div>
       <div className="col">
        <Cards
           imagen="https://picsum.photos/200/300"
           titulo="Titulo card 2"
           texto="Texto de la card 2"
          />
       </div>
       <div className="col">
        <Cards
           imagen="https://picsum.photos/200/300"
           titulo="Titulo card 3"
           texto="Texto de la card 3"
          />
       </div>
      </div>
   </div>
  );
}

export default App;
