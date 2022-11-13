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
        'element': 'label',
        'type': 'text',
        'text': 'Nombre',
        'valueInput': 'name',
        'setValue': 'setUsername'
    }, {
        'key':'2',
        'element': 'label',
        'type': 'text',
        'text': 'DUI',
        'valueInput': 'password',
        'setValue': 'setPassword'   
    }, {
        'key':'3',
        'element': 'label',
        'type': 'text',
        'text': 'Correo electrónico',
        'valueInput': 'username',
        'setValue': 'setUsername'
    }, {
        'key':'4',
        'element': 'label',
        'type': 'text',
        'text': 'Número de teléfono',
        'valueInput': 'username',
        'setValue': 'setUsername'
    }, {
        'key':'5',
        'element': 'label',
        'type': 'text',
        'text': 'Dirección',
        'valueInput': 'username',
        'setValue': 'setUsername'
    }]
    
    return (
        <Form title={'Datos del cliente'} formType={'client-data'} formFields={formFields} justContinue={false} cancelText={'Cancelar'} continuePath={'/../booking/delivery-method'} continueText={'Continuar'}/>
    )
}

export default FirstStep