import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
/* Import the form */
import Form from '../../Form/Form';

const FirstStep = ({ onLoad }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("products")) navigate('/feed')
    }
        , [localStorage.getItem("products")])

    const [Activo, setActivo] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const [data, setData] = useState('');

    useEffect(() => {
        setData({
            name: name,
            email: email,
            phone: phone,
            address: address,
            setActivo: setActivo
        })
    }, [name, email, phone, address])


    /* Change the current step */
    useEffect(() => {
        onLoad(1);
    }, [])

    /* Form fields for the first step */
    const formFields = [{
        'key': '1',
        'element': 'label',
        'type': 'text',
        'text': 'Nombre',
        'valueInput': name,
        'setValue': setName
    },
    {
        'key': '2',
        'element': 'label',
        'type': 'text',
        'text': 'Correo electrónico',
        'valueInput': email,
        'setValue': setEmail
    }, {
        'key': '3',
        'element': 'label',
        'type': 'tel',
        'text': 'Número de teléfono',
        'valueInput': phone,
        'setValue': setPhone
    }, {
        'key': '4',
        'element': 'label',
        'type': 'text',
        'text': 'Dirección',
        'valueInput': address,
        'setValue': setAddress
    }]

    useEffect(() => {
        const CorreoValido = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
        if (datos.name.length > 0 & datos.email.length > 0 & datos.phone.length == 8 & datos.email.match(CorreoValido) != null) {
            console.log(datos);
            datos.setActivo(true);
        }
    },[data])

    return (
        <Form title={'Datos del cliente'} formType={'client-data'} formFields={formFields} justContinue={false} cancelPath={'/feed'} cancelText={'Cancelar'} continuePath={'../delivery-method'} continueText={'Continuar'} Activo={Activo} />
    )
}

export default FirstStep