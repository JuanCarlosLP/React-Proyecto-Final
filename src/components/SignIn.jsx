import React from "react";
import firebase from '../firebase/config';
import {useHistory} from 'react-router-dom'; 
//* Material imports
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export default function SignIn (props) {
  const history = useHistory();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const facebookProvider = new firebase.auth.FacebookAuthProvider();

  const showGooglePopup = async () => {
    try {
      let result = await firebase.auth().signInWithPopup(googleProvider);
      console.log("Autenticado satisfactoriamente", result);
      //Para actualizar el estado y redireccionar al usuario a otra pagina
      await props.setUserFn(result.user);
      history.push("/pokedex");
    } catch (error) {
      console.log("Error en la autenticacion", error);
      //En caso de que las credenciales de acceso sean incorrectas
    }
  };

  const showFacebookPopup = async () => {
    try {
      let result = await firebase.auth().signInWithPopup(facebookProvider);
      console.log("Autenticado satisfactoriamente", result);
      //Para actualizar el estado y redireccionar al usuario a otra pagina
      props.setUserFn(result.user);
      history.push("/pokedex");
    } catch (error) {
      console.log("Error en la autenticacion", error);
      //En caso de que las credenciales de acceso sean incorrectas
    }
  };



   return (
<div>
    <Grid container style={{minHeight: '100vh'}}>
        {/*PRIMER CONTENEDOR con Imagen*/}
        <Grid item xs={12} sm={6}>
            <img src="https://i.pinimg.com/originals/7c/19/62/7c1962b7a65ec76085f96e1ccf8bfc7e.jpg" 
            style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="poke-logo"/>
        </Grid>
        {/*SEGUNDO CONTENEDOR con Formulario*/}
        <Grid 
            container 
            item 
            xs={12} 
            sm={6} 
            aligncontent="center" 
            direction="column"
            justify="space-between"
            style={{ padding:10 }}>
            <div />
            <div style={{
                display:"flex", 
                flexDirection:"column",
                maxWidth:300,
                minWidth:400,
                }}>
                {/*Pokemon Logo*/}
                <Grid container justify="center" >
                    <img src="https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png" alt="Pokemon Logo" width='200'/>
                </Grid>
                {/*Username*/}
                <TextField
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
</div>
  )
};