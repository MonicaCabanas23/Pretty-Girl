import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Label from '../../../Form/Label/Label';
import Description from '../../../Form/Description/Description';
import Button from '../../../Button/Button';
import A from '../../../a/a';
import H from '../../../H/H';
import P from '../../../P/P';
import Combobox from '../../../Form/ComboBox/ComboBox';


/* A form can have different types in this app: login, register, client-data, delivery-info, description*/
/* cancelHandle y continueHandle son parámetros para funciones en caso de que se de click en esos bootones */
const ContainerPD = ({ title, formType, formFields, descriptionFields, justReserva, CrearRevervarPatch, RevervarPatch }) => {
    const [Datos, setDatos] = useState([]);
    const [Descripcion, setDescription] = useState([]);
    const [combobox, setCombobox] = useState();
    const [Boton, setButton] = useState([]);
    const [img, setImg] = useState([]);

    /* When render just once */
    useEffect(() => {
        if (formType != 'description') {
            /* Get label fields */
            const mappedDatos = formFields.map(field => {
                if (field.element === 'label') {
                    return (
                        <Label key={field.key} text={field.text} InputUse={field.use} clase={field.clase ? field.clase : false} />
                    )
                }
            });

            const mappedCombobox = formFields.map(field => {
                if (field.element === 'combobox') {
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
            });
            const mapeedimg = formFields.map(img => {
                if (img.element === 'img') {
                    return (
                        <img key={img.key} src={img.src} />
                    )
                }
            })
            const mappedDescription = formFields.map(field => {
                if (field.element[0] === 'h') {
                    return (
                        <H key={field.key} text={field.text} type={field.element} />
                    )
                }
            });

            setDatos(mappedDatos);
            setCombobox(mappedCombobox);
            setDescription(mappedDescription)
            setButton(mapeedButton);
            setImg(mapeedimg);
        }
    }, []);

    return (
        <div className='form-container'>
            <div className='form-img'>
                {img}
            </div>
            <div className='form'>
                <div className='form-datos'>
                    {Datos}
                </div>
                <div className='form-description'>
                    {Descripcion}
                </div>
                <div className='form-combobox'>
                    {combobox}
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

export default ContainerPD;