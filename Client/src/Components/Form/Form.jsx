import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import './Form.scss'
import Label from '../Label/Label'
import Description from './Description/Description';
import Button from '../Button/Button'

/* A form can have different types in this app: login, register, client-data, delivery-info, description*/
/* cancelHandle y continueHandle son parámetros para funciones en caso de que se de click en esos bootones */
const Form = ({title, formType, formFields, descriptionFields, justContinue, cancelHandle, cancelPath, cancelText, continueHandle, continuePath, continueText}) => {
    const [fields, setFields] = useState([]);

    /* When render just once */
    useEffect(() => {
        if (formType != 'description') {
            const mappedForm = formFields.map( field => {
                return(
                    <Label  key={field.key} type={field.type} text={field.text} valueInput={field.value} setValue={field.setValue}/>
                )
            });
            setFields(mappedForm);
        }

        /* Si no hay campos que el usuario deba de llenar entonces utilizaremos el form del tipo description */
        if (formType === 'description'){
            const mappedDescription = descriptionFields.map( field => {
                return(
                    <Description key={field.key} title={field.title} descriptionObject={field.object}/>
                )
            });
            console.log(mappedDescription);
            setFields([]);
        }

    }, []);

  return (
    <div className='form-container'>
        <form className={formType}>
            <h1>{title}</h1>
            <div className="formFields">
                {fields}
            </div>
            <div className="actions">
                {
                    justContinue ? <></> : <Link to={cancelPath}><Button clase='cancel' onClick={cancelHandle} text={cancelText}/></Link> 
                }
                <Link to={continuePath}><Button clase='continue' onClick={continueHandle} text={continueText}/></Link>
            </div>
        </form>
    </div>
  )
}

export default Form