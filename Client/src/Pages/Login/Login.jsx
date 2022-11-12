import './Login.scss';
import React, { useState, useEffect} from 'react';
import Label from '../../Components/Label/Label';
import Button from '../../Components/Button/Button';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect (() => {
        console.log(username);
        console.log(password);
    }, [username, password]);

    return (
        <div className="login">
            <div className='formulario'>
                <div className="form">
                    <h1>Iniciar sesión</h1>
                    <div className="form__body">
                        <Label  type='text' text={'Nombre de usuario'} clase={'name'} valueInput={username} setValue={setUsername}/>
                        <Label  type='password' text={'Contraseña'} clase={'password'} valueInput={password} setValue={setPassword}/>
                    </div>
                    <div className="buttons">
                        <Button clase={"continue"} onClick={() => { console.log(username); console.log(password); }} text={"Iniciar sesión"} />
                    </div>
                    <a href="#">¿Eres nuevo? Regístrate</a>
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
