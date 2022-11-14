import './Login.scss';
import React, { useState, useEffect } from 'react';
import Label from '../../Components/Label/Label';
import Button from '../../Components/Button/Button';
import Form from '../../Components/Form/Form';
import axios from "axios";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = formFields[0].valueInput;
        const password = formFields[1].valueInput;
        const url = "https://prettygirl-api.herokuapp.com/api/auth/login"
        
        const body = { "email":email, "password":password };
        axios.post(url, body)
            .then(response => {
                const token = response.data.token;
                localStorage.setItem("token", token);
                const user = response.data.user;
                localStorage.setItem("user", JSON.stringify(user));
            });
    }

    useEffect(() => {
    }, [email, password]);

    const formFields = [{
        'key': '1',
        'element':'label',
        'type': 'text',
        'text': 'Correo',
        'valueInput': email,
        'setValue': setEmail
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
            <Form title={'Iniciar sesión'} formType={'login'} formFields={formFields} justContinue={true} continuePath={''} continueText={'Iniciar sesión'} continueHandle={(e) => handleSubmit(e)}/>
        </>
    );
}

export default Login;