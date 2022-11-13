import React, {useEffect} from 'react';
/* Import the form */
import Form from '../../Form/Form';

const FirstStep = ({onLoad}) => {
    /* Change the current step */
    useEffect(() => {
        onLoad(1);
    }, [])

    /* Form fields for the first step */
    const formFields = [{
        'key':'1',
        'type': 'text',
        'text': 'Nombre',
        'valueInput': 'name',
        'setValue': 'setUsername'
    }, {
        'key':'2',
        'type': 'text',
        'text': 'DUI',
        'valueInput': 'password',
        'setValue': 'setPassword'   
    }, {
        'key':'3',
        'type': 'text',
        'text': 'Correo electrónico',
        'valueInput': 'username',
        'setValue': 'setUsername'
    }, {
        'key':'4',
        'type': 'text',
        'text': 'Número de teléfono',
        'valueInput': 'username',
        'setValue': 'setUsername'
    }, {
        'key':'5',
        'type': 'text',
        'text': 'Dirección',
        'valueInput': 'username',
        'setValue': 'setUsername'
    }]
    
    return (
        <Form title={'Datos del cliente'} formType={'client-data'} formFields={formFields} justContinue={false} continuePath={'/../booking/delivery-method'}/>
    )
}

export default FirstStep