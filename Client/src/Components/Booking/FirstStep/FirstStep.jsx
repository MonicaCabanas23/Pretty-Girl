import React, {useEffect, useState} from 'react';
/* Import the form */
import Form from '../../Form/Form';

const FirstStep = ({onLoad}) => {
    const [Activo, setActivo] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    
    const [data, setData] = useState('');

    useEffect(() => {
        setData({
            name: name,
            password: password,
            email: email,
            phone: phone,
            address: address
        })
    }, [name, password, email, phone, address])

    
    /* Change the current step */
    useEffect(() => {
        onLoad(1);
    }, [])

    /* Form fields for the first step */
    const formFields = [{
        'key':'1',
        'element': 'label',
        'type': 'text',
        'text': 'Nombre',
        'valueInput': name,
        'setValue': setName
    }, {
        'key':'2',
        'element': 'label',
        'type': 'text',
        'text': 'DUI',
        'valueInput': password,
        'setValue': setPassword   
    }, {
        'key':'3',
        'element': 'label',
        'type': 'text',
        'text': 'Correo electrónico',
        'valueInput': email,
        'setValue': setEmail
    }, {
        'key':'4',
        'element': 'label',
        'type': 'text',
        'text': 'Número de teléfono',
        'valueInput': phone,
        'setValue': setPhone
    }, {
        'key':'5',
        'element': 'label',
        'type': 'text',
        'text': 'Dirección',
        'valueInput': address,
        'setValue': setAddress
    }]
    
    return (
        <Form title={'Datos del cliente'} formType={'client-data'} formFields={formFields} justContinue={false} cancelPath={'/feed'} cancelText={'Cancelar'} continuePath={'../delivery-method'} continueText={'Continuar'} continueHandle={()=>{Continue(data)}} Activo={Activo} />
    )
}

export default FirstStep

function Continue(datos){
    console.log(datos);
}