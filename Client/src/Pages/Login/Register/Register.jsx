import './Register.scss';
import React, { useState } from 'react';
import Form from '../../../Components/Form/Form';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function Registro() {
    const [name, setName] = useState('');
    const [dui, setDui] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        const url = "/api/users";
        
        const body = { 
            "name":name,
            "dui":dui,
            "email":correo,
            "phone":telefono,
            "address":direccion,
            "password":password
        };
        axios.post(url, body)
            .then(response => {
                if(response.status === 200){
                    navigate("/login");
                }
            });
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
        'key': '6',
        'element':'label',
        'type': 'password',
        'text': 'Contraseña',
        'valueInput': password,
        'setValue': setPassword
    },
    {
        'key': '7',
        'element':'link',
        'path':'/login',
        'text': "¿Ya tienes una cuenta? Inicia sesión"
    }
    ]

    return (
        <>
            <Form title={'Registrarse'} formType={'registro'} formFields={formFields} justContinue={true} continueText={'Registrarse'} continueHandle={(e) => handleSubmit(e)}/>
        </>
    );
}

export default Registro;
