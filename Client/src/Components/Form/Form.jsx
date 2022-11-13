import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import './Form.scss'
import './DescriptionContainer/DescriptionContainer';
import Label from '../Label/Label'
import Button from '../Button/Button'
import DescriptionContainer from './DescriptionContainer/DescriptionContainer';

/* A form can have different types in this app: login, register, client-data, delivery-info, description*/
/* cancelHandle y continueHandle son parámetros para funciones en caso de que se de click en esos bootones */
const Form = ({title, formType, formFields, justContinue, cancelHandle, cancelPath, continueHandle, continuePath}) => {
    const [fields, setFields] = useState([]);

    /* When render just once */
    useEffect(() => {
        if (formType != 'description') {
            const mappedFields = formFields.map( field => {
                return(
                    <Label  key={field.key} type={field.type} text={field.text} valueInput={field.value} setValue={field.setValue}/>
                )
            });

            setFields(mappedFields);
        }
    }, []);

  return (
    <div className='form-container'>
        <form className={formType}>
            <h1>{title}</h1>
            <div className="formFields">
                {(formType != 'description') ? fields: <DescriptionContainer />}
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