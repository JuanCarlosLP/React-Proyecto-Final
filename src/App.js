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
import ChatReact from './ChatReact';
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
          <ProtectedRoute path="/chatreact" user={user} setUserFn={setUser}>
            <ChatReact />
          </ProtectedRoute>
          <Route path="*" exact>
            <h2>404 Not Found</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}