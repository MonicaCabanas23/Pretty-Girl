import './Login.scss';
import React, {useState} from 'react'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login">
            <div className='formulario'>
                <div className="form">
                    <h1>Iniciar sesion</h1>
                    <div className="form__body">
                        <div className="name">
                            <label className="form__label">Nombre de usuario</label>
                            <input className="form__input" name="username" value={username} onChange={(e) => {setUsername(e.target.value)}} />
                        </div>
                        <div className="password">
                            <label className="form__label" >Contraseña</label>
                            <input className="form__input" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="Iniciar_sesion" onClick={() => {console.log(username); console.log(password);}}>Iniciar sesion</button>
                    </div>
                    <a href="#">¿Eres nuevo? Registrate</a>
                    <a href="#">¿Olvidaste tu contraseña?</a>                     
                </div>
            </div>
        </div>
    );
}

export default Login;
