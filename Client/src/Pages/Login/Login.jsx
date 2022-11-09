import './Login.scss';
import React, { useState } from 'react';
import Label from '../../Components/ComponentesLoginRegistro/label'
import Button from '../../Components/ComponentesLoginRegistro/Button/Button';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login">
            <div className='formulario'>
                <div className="form">
                    <h1>Iniciar sesion</h1>
                    <div className="form__body">
                        <Label name={"text"} text={'Nombre de usuario'} clase={'name'} password={username} setPassword={setUsername} />
                        <Label name={"password"} text={'Contraseña'} clase={'password'} password={password} setPassword={setPassword} />
                    </div>
                    <div className="buttons">
                        <Button clase={"Iniciar_sesion"} onClick={() => { console.log(username); console.log(password); }} text={"Iniciar sesion"} />
                    </div>
                    <a href="#">¿Eres nuevo? Registrate</a>
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
