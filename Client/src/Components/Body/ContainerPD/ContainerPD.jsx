import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Label from '../../Form/Label/Label';
import Description from '../../Form/Description/Description';
import Button from '../../Button/Button';
import A from '../../a/a';
import H from '../../H/H';
import P from '../../P/P';


/* A form can have different types in this app: login, register, client-data, delivery-info, description*/
/* cancelHandle y continueHandle son parámetros para funciones en caso de que se de click en esos bootones */
const ContainerPD = ({ title, formType, formFields, descriptionFields, justReserva, CrearRevervarPatch, RevervarPatch }) => {
    const [Datos, setDatos] = useState([]);
    const [Descripcion, setDescription] = useState([]);
    const [Boton, setButton] = useState([]);
    
    /* When render just once */
    useEffect(() => {
        if (formType != 'description') {
            /* Get label fields */
            const mappedDatos = formFields.map(field => {
                if (field.element === 'label') {
                    return (
                        <Label key={field.key} text={field.text} InputUse={field.use} clase={field.clase ? field.clase:false} />
                    )
                }
            });

            const mappedDescription = formFields.map(field => {
                if (field.element[0] === 'h') {
                    return (
                        <H key={field.key} text={field.text} type={field.type} />
                    )
                }
                else if (field.element === 'p') {
                    return (
                        <P key={field.key} text={field.text} />
                    )
                }
                else if (field.element === 'combobox') {
                    return (
                        <Combobox key={field.key} clase={field.clase} name={field.name} options={field.options} />
                    )
                }
            });

            const mapeedButton = formFields.map(btn => {
                if (btn.element === 'button') {
                    return (
                        <Button key={btn.key} clase={btn.clase} text={btn.text} onClick={btn.onClick} />
                    )
                }
            })

            setDatos(mappedDatos);
            setDescription(mappedDescription);
            setButton(mapeedButton);
        }

        /* Si no hay campos que el usuario deba de llenar entonces utilizaremos el form del tipo description */
        if (formType === 'description') {
            const mappedDescription = descriptionFields.map(field => {
                return (
                    <Description key={field.key} title={field.title} descriptionObject={field.object} />
                )
            });
            console.log(mappedDescription);
            setFields([]);
        }

    }, []);

    return (
        <div className='form-container'>
            <div className='form'>
                <div className='form-datos'>
                    {Datos}
                </div>
                <div className="form-description">
                    {Descripcion}
                </div>
                <div className="actions">
                    {
                        justReserva ? <Link to={RevervarPatch}> {Boton} </Link> : <Link to={CrearRevervarPatch}>{Boton}</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ContainerPD