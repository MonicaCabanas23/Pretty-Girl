import './Registro.scss';
import React, { useState } from 'react';
import Form from '../../Components/Form/Form';
import axios from "axios";

function Registro() {
    const [name, setName] = useState('');
    const [dui, setDui] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = "/api/users";
        
        const body = { 
            "name":name,
            "dui":dui,
            "email":correo,
            "phone":telefono,
            "address":direccion,
            "password":password
        };
        axios.post(url, body);
    }

    const formFields = [{
        'key': '1',
        'element':'label',
        'type': 'text',
        'text': 'Nombre',
        'valueInput': name,
        'setValue': setName
    },
    {
        'key': '2',
        'element':'label',
        'type': 'text',
        'text': 'DUI',
        'valueInput': dui,
        'setValue': setDui
    },
    {
        'key': '3',
        'element':'label',
        'type': 'text',
        'text': 'Correo electrónico',
        'valueInput': correo,
        'setValue': setCorreo
    },
    {
        'key': '4',
        'element':'label',
        'type': 'text',
        'text': 'Número de teléfono',
        'valueInput': telefono,
        'setValue': setTelefono
    },
    {
        'key': '5',
        'element':'label',
        'type': 'text',
        'text': 'Dirección',
        'valueInput': direccion,
        'setValue': setDireccion
    },
    {
        'key': '5',
        'element':'label',
        'type': 'text',
        'text': 'Contraseña',
        'valueInput': password,
        'setValue': setPassword
    },
    {
        'key': '6',
        'element':'a',
        'href':'#',
        'text': "¿Ya tienes una cuenta? Inicia sesión"
    }
    ]

    return (
        <>
            <Form title={'Registrarse'} formType={'registro'} formFields={formFields} justContinue={true} continuePath={''} continueText={'Registrarse'} continueHandle={(e) => handleSubmit(e)}/>
        </>
    );
}

export default Registro;
