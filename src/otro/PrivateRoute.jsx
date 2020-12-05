import React from 'react';
import {Route} from 'react-router-dom';

/* export default function PrivateRoute(props) {
  const [user, setUser] = useState({name: "Luis", email: "aroa@gmail.com", isLogged: false})

  return (
    <Route path={props.path} render= {() => <h2>Ruta protegida</h2>}> {/* La propiedad render para renderizar desde aquí */}
      {/* <h2>Ruta Protegida</h2> */}
    </Route>
  )
 //Ver imagenes de pantalla para ver condicional 
} */

//Su usa este componente en App.js en donde se pasa el prop de la ruta
// Se incluye al final de todos los Route antes del 404