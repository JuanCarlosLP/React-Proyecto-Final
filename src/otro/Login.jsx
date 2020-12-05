import Reat from 'react';

/* export default function Login() {
  return (
    <div>
      <button onClick= {showGooglePopup} >Iniciar sesión con Google</button>
      <button onClick= {showFacebookPopup} >Iniciar sesión con Facebook</button>
    </div>
  );
} */

// Se importa en App en la ruta raíz

// En firebase nos da la función para autenticar en la documentación
// https://firebase.google.com/docs/auth/web/google-signin?authuser=0
// Usar el SDK de firebase para google se utiliza al importar firebase
// Se agrega instancia de proveedor de google por lo que se importa firebase en este componente
const googleProvider = new firebase.auth.GoogleAuthProvider(); // Instancia de la clase
// Especificar los alcances de la autenticación: correo, contactos, etc.
// Paso 5 para arrojar ventana emergente
const showGooglePopup = async () => {
  try {
    let result = await firebase.auth().signInWithPopup(googleProvider);
    console.log(result);
    //Lógica para redireccionar al usuario a otra página
    // Aquí también se actualiza un estado que nos daría entrada o no a diferentes páginas
  }catch(error) {
    console.log(error);
    //En caso que las credenciales de acceso sean incorrectas
  }
}
// Se registra el dominio para que esté autorizado por firebase


const facebookProvider = new firebase.auth.FacebookProvider();

const showFacebookPopup = async () => {
  try {
    let result = await firebase.auth().signInWithPopup(facebookProvider);
    console.log(result);
  }catch(error) {
    console.log(error);
  }
}

