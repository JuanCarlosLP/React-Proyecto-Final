import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  // Link,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
//* Components
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Pokedex from './Pokedex';
//* PrivateRoute
import ProtectedRoute from './components/ProtectedRoute';

//!Firebase
// import firebase, {auth} from "./firebase/config";


//! Firebase
export default function App() {
  const [user, setUser] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header user={user} setUserFn={setUser} />
        
        <Switch>
          <Route path="/" exact>
            <SignIn setUserFn={setUser} />
          </Route>
          <Route path="/registro">
            <SignUp />
          </Route>
          <ProtectedRoute path="/pokedex" user={user} setUserFn={setUser}>
            <Pokedex />
          </ProtectedRoute>
          <Route path="*" exact>
            <h2>404 Not Found</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}


    //! Firebase
    // let provider =  new firebase.auth.GoogleAuthProvider();

    //! Firebase
    // let facebookProvider = new firebase.auth.FacebookAuthProvider();

    //! Firebase
    // const signInGoogle = () => {
    //   auth.signInWithPopup(provider).then(result =>{
    //     let token = result.credential.accesToken;
    //     let user = result.user;
    //     console.log(user);
    //   }).catch(error => {
    //     console.log(error);
    //   })
    // }

    //!Firebase
    // const signInFacebook = () => {
    //   auth.signInWithPopup(facebookProvider).then(result =>{
    //     let token = result.credential.accesToken;
    //     let user = result.user;
    //     console.log(user);
    //   }).catch(error => {
    //     console.log(error);
    //   })
    // }
