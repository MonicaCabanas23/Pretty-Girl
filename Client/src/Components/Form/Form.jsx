import React from 'react'
import { Link } from "react-router-dom";
import './Form.scss'
import Label from '../Label/Label'
import Button from '../Button/Button'

/* A form can have different types in this app: login, register, client-data, delivery-info */
const Form = ({title, formType, formFields, justContinue, cancelHandle, cancelPath, continueHandle, continuePath}) => {

    const mappedFields = formFields.map( field => {
        return(
            <Label  key={field.key} type={field.type} text={field.text} valueInput={field.value} setValue={field.setValue}/>
        )
    });

  return (
    <div className='form-container'>
        <form className={formType}>
            <h1>{title}</h1>
            <div className="formFields">
                {mappedFields}
            </div>
            <div className="actions">
                {
                    justContinue ? <></> : <Link to={cancelPath}><Button clase='cancel' onClick={cancelHandle} text={'Cancelar'}/></Link> 
                }
                <Link to={continuePath}><Button clase='continue' onClick={continueHandle} text={'Continuar'}/></Link>
            </div>
        </form>
    </div>
  )
}

export default Form