import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import './Form.scss'
import Label from './Label/Label'
import Description from './Description/Description';
import Button from '../Button/Button'

/* A form can have different types in this app: login, register, client-data, delivery-info, description*/
/* cancelHandle y continueHandle son parámetros para funciones en caso de que se de click en esos bootones */
const Form = ({ title, formType, formFields, justContinue, cancelHandle, cancelPath, cancelText, continueHandle, continuePath, continueText }) => {
    const [fields, setFields] = useState([]);
    const [links, setLinks] = useState([]);

    /* When render just once */
    useEffect(() => {
        if(formFields != undefined){
            /* Get label fields */
            const mappedForm = formFields.map(field => {
                if (field.element === 'label') {
                    return (
                        <Label key={field.key} type={field.type} text={field.text} valueInput={field.value} setValue={field.setValue} />
                    )
                }
            });

            /* Get links fields */
            const mappedLinks = formFields.map(link => {
                if (link.element === 'link') {
                    return (
                        <Link key={link.key} to={link.path}>
                            <>{link.text}</>
                            {/* <A key={link.key} href={link.href} text={link.text} /> */}
                        </Link>
                        
                    )
                }
            });

            /* Get descriptions */
            const mappedDescription = formFields.map(description => {
                if (description.element === 'product-description' || description.element === 'delivery-description') {
                    return (<>
                        <Description title={description.title} productDescription={description.element === 'product-description' ? true : false}/>
                        <hr />
                    </>
                    )
                }
            });

            if(formType != 'description'){
                setFields(mappedForm);
            } else {
                setFields(mappedDescription);
            }
            setLinks(mappedLinks);
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
                        justContinue ? <></> : <Link to={cancelPath}><Button clase='cancel' onClick={cancelHandle} text={cancelText} /></Link>
                    }
                    <Link to={continuePath}><Button clase='continue' onClick={continueHandle} text={continueText} /></Link>
                </div>
                {links.length != 0 ? 
                <div className="links">
                    {links}
                </div> 
                : <></>}
            </form>
        </div>
    )
}

export default Form