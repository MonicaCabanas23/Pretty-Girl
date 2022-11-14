import './Login.scss';
import React, { useState, useEffect } from 'react'; 
import Form from '../../Components/Form/Form'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log(username);
        console.log(password);
    }, [username, password]);

    const formFields = [{
        'key': '1',
        'element':'label',
        'type': 'text',
        'text': 'Nombre de usuario',
        'valueInput': username,
        'setValue': setUsername
    },
    {
        'key': '2',
        'element':'label',
        'type': 'password',
        'text': 'Contraseña',
        'valueInput': password,
        'setValue': setPassword
    },
    {
        'key': '3',
        'element':'a',
        'href':'#',
        'text': "¿No tienes una cuenta? Regístrate"
    },
    {
        'key': '4',
        'element':'a',
        'href':'#',
        'text': "¿Olvidaste tu contraseña?"
    }
    ]

    return (
        <>
            <Form title={'Iniciar sesión'} formType={'login'} formFields={formFields} justContinue={true} continuePath={''} continueText={'Iniciar sesión'} />
        </>
    );
}

export default Login;
