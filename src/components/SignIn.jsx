import React, {useState} from "react";
import firebase, {auth} from '../firebase/config';
import {useHistory} from 'react-router-dom'; 
//* Material imports
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export default function SignIn (props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const facebookProvider = new firebase.auth.FacebookAuthProvider();

  const handleEmailFieldChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordFieldChange = (event) => {
    setPassword(event.target.value);
  };

  const login = async (event) => {
    try {
      event.preventDefault();
      const result = await auth.signInWithEmailAndPassword(email, password)
      await props.setUserFn(result.user);
      history.push("/pokedex");
    } catch (error) {
      console.log("Error en la autenticacion", error);
    }
  };

  const showGooglePopup = async () => {
    try {
      let result = await firebase.auth().signInWithPopup(googleProvider);
      await props.setUserFn(result.user);
      history.push("/pokedex");
    } catch (error) {
      console.log("Error en la autenticacion", error);
    }
  };

  const showFacebookPopup = async () => {
    try {
      let result = await firebase.auth().signInWithPopup(facebookProvider);
      console.log("Autenticado satisfactoriamente", result);
      props.setUserFn(result.user);
      history.push("/pokedex");
    } catch (error) {
      console.log("Error en la autenticacion", error);
    }
  };

   return (
  <div className="signin">
    <form onSubmit={login} >
      <Grid container style={{height: '92vh'}}>
          <Grid 
              container 
              item 
              xs={12} 
              sm={6}
              alignItems="center"
              justify="center"
              style={{ padding:10 }}>
              <div />
              <div style={{
                  display:"flex", 
                  flexDirection:"column",
                  maxWidth:300,
                  minWidth:400,
                  }}>
                  {/*Email*/}
                  <TextField
                      onChange={(e) => handleEmailFieldChange(e)}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                  />
                  {/*Password*/}
                  <TextField
                      onChange={(e) => handlePasswordFieldChange(e)}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                  />
                  <div style={{ height: 20 }} />
                  {/*Button Sign In*/}
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="link"
                      aligncontent="center" 
                      direction="column"
                      justify="space-between"
                      style={{ padding:10, top:10}}
                  >
                  Sign In
                  </Button>
                  <div style={{ height: 20 }} />
                  {/*Button Sign In Google*/}
                  <Button
                      onClick={showGooglePopup}
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="secondary"
                      aligncontent="center" 
                      direction="column"
                      justify="space-between"
                      style={{ padding:10, top:10}}
                  >
                  Sign In Google
                  </Button>
                  <div style={{ height: 20 }} />
                  {/*Button Sign In Facebook*/}
                  <Button
                      onClick={showFacebookPopup}
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      aligncontent="center" 
                      direction="column"
                      justify="space-between"
                      style={{ padding:10, top:10}}
                  >
                  Sign In Facebook
                  </Button>
              </div>
              <div />
          </Grid>
      </Grid>
    </form>
  </div>
  )
};