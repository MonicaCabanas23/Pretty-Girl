import './Registro.scss';
import React, { useState } from 'react';
import Form from '../../Components/Form/Form';

function Registro() {
    const [name, setName] = useState('');
    const [dui, setDui] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

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
        'element':'a',
        'href':'#',
        'text': "¿Ya tienes una cuenta? Inicia sesión"
    }
    ]

    return (
        <>
            <Form title={'Registrarse'} formType={'registro'} formFields={formFields} justContinue={true} continuePath={''} continueText={'Registrarse'} />
        </>
    );
}

export default Registro;
