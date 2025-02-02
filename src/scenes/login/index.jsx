import { useState } from "react"
import "../login/login.css"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';

const VALID_CREDENTIALS = {
    email: 'usuario@ejemplo.com',
    password: '123456'
  };

const SignUp = ({setUsername, setPasswordVerifier, setUsernameRecovery, setUserForcePassword}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  //const [showLoader, setShowLoader] = useState(false)
  const [incorrectCredentials, setIncorrectCredentials] = useState(false);
  const navigate = useNavigate();


  const onSubmit = (e) => {
    e.preventDefault();
    if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
        toast.success("¡Credenciales correctas! Redirigiendo...");
        setTimeout(() => {
          navigate('/admin');
        }, 2000);
    } else {
      // Si las credenciales son incorrectas, mostrar un mensaje de error
      setIncorrectCredentials(true);
    }
  };

  return(<>
    <div className="particulas">

      <div className="login-section">
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          
          <div className="user-box">
            <input 
              value={email} 
              id="usuario" 
              onChange={(event) => setEmail(event.target.value)} />
            <label htmlFor="email">Username</label>
          </div>

          
          <div className="user-box">
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <label htmlFor="password">Password</label>
          </div>

          <button type="submit">Iniciar Sesión</button>
        </form>
        {incorrectCredentials && (
            <p style={{ color: 'red', fontSize: '16px' }}>
              Credenciales incorrectas. Intenta nuevamente.
            </p>
          )}
      </div>
    </div>
    <ToastContainer />
  </>)
}

export default SignUp;