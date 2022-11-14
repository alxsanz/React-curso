import React from "react";
import Usuarios from "./components/Usuarios";
import Usuario from "./components/Usuario";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'


function App() {
  return (
    
    <Router>

      <Link to="/">Usuarios</Link>
   
     <Routes>
       <Route exact path="/" element={<Usuarios/>}>
       </Route>
       <Route path="/usuario/:id" element={<Usuario/>}>
       </Route>
     </Routes>

    </Router>

  );
}

export default App;
