import React from 'react'
import Label from '../Label/Label'

/* A form can have different types in this app: login, register, client-data, delivery-info */
const Form = ({title, formType}) => {
    const formFields = [{
        'key':'key1',
        'type': 'text',
        'text': 'Nombre de usuario',
        'valueInput': 'username',
        'setValue': 'setUsername'
    }, {
        'key':'key2',
        'type': 'password',
        'text': 'Contraseña',
        'valueInput': 'password',
        'setValue': 'setPassword'   
    }, {
        'key':'key3',
        'type': 'text',
        'text': 'Nombre de usuario',
        'valueInput': 'username',
        'setValue': 'setUsername'
    }, {
        'key':'key4',
        'type': 'text',
        'text': 'Nombre de usuario',
        'valueInput': 'username',
        'setValue': 'setUsername'
    }, ]

    const mappedFields = formFields.map( field => {
        return(
            <Label  key={field.key} type={field.type} text={field.text} valueInput={field.value} setValue={field.setValue}/>
        )
    });

  return (
    <form className='login'>
        <h1>Inicio de sesión</h1>
        <div className="formFields">
            {mappedFields}
        </div>
    </form>
  )
}

export default Form