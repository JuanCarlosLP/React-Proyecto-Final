import React, { useState } from "react";
import { Route } from "react-router-dom";
//* Components
import SignIn from './SignIn';

export default function ProtectedRoute(props) {
  const [user, setUser] = useState(props.user);
  return (
    <Route path={props.path}>
      {/* {user ? 
      (props.children) :
      (
        // <SignIn setUserFn={props.setUserFn} />
        <>
          <h2>No tienes acceso a esta ruta</h2>
        </>
      )} */}
      {(props.children)}
    </Route>
  );
}