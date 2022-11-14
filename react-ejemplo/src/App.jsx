import React from "react";
import Inicio from "./components/Inicio";
import Base from "./components/Base";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'


function App() {
  return (
    
    <Router>

      <Link to="/inicio">Inicio</Link>
      <Link to="/">Base</Link>

     <Routes>
       <Route path="/" element={<Base/>}>
        </Route>

        <Route path="/inicio/" element={<Inicio/>}>
       </Route>

       <Route path="/inicio/:nombre/:edad/:id" element={<Inicio/>}>
        //los enlaces que llevan (:) son elementos dinámicos.
       </Route>
  
     </Routes>

    </Router>

  );
}

export default App;
