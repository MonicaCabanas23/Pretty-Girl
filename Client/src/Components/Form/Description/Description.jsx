import React, {useState, useEffect} from 'react';   
import classes from './Description.module.scss';

const Description = ({title, description, productDescription}) => {
    const [fields, setFields] = useState([]);

    useEffect(() => {

        if(productDescription) {
            const mappedProduct = description.map(object => {
                const {product, color, size, quantity, total} = object;
                return ( 
                    <>
                        <p key={'product-1'}>Producto: {product}</p>
                        <p key={'product-2'}>Color: {color}</p>
                        <p key={'product-3'}>Talla: {size}</p>
                        <p key={'product-4'}>Cantidad: {quantity}</p>
                        <p key={'product-5'}>Total: {total}</p>
                    </>
                )
            });
    
            setFields(mappedProduct);
        } else {
            const mappedDelivery = description.map (object => {
                const {addresee, date, location} = object; 
                return (
                    <>
                        <p key={'delivery-1'}>Nombre de destinatario: {addresee}</p>
                        <p key={'delivery-2'}>Fecha estimada de envío: {date}</p>
                        <p key={'delivery-3'}>Ubicación de envío: {location}</p>
                    </>
                )
            });

            setFields(mappedDelivery);
        }

    }, []);

    return (
        <div className={`${classes['description-field']}`}>
            <h4>{title}</h4>
            {
                productDescription ? 
                <div className="product-description"> 
                    {fields}
                </div> : 
                <div className="delivery-description">
                    {fields}
                </div>
            }
        </div>
    )
}

export default Description