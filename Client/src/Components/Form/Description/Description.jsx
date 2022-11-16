import React, {useState, useEffect} from 'react';   
import './Description.scss';
import Label from '../Label/Label';

const Description = ({title, description, productDescription, setObject}) => {
    const [fields, setFields] = useState([]);

    /* En cada cambio en el numericUpDown lo guardamos en productQuantity */
    const [productQuantity, setProductQuantity] = useState(description[0].quantity);

    const handleProductChange = () => {

        let changedProduct = description[0];
        console.log(productQuantity);

        /* changedProduct.quantity = productQuantity;
        changedProduct.total = productQuantity*description[0].total; */

        setObject(changedProduct);
    }

    useEffect(() => {

        if(productQuantity > 1 || productDescription) {
            console.log(description);
            const mappedProduct = description.map(object => {
                const {product, color, size, quantity, total} = object;
                    return ( 
                        <>
                            <p key={'product-1'}>Producto: {product}</p>
                            <p key={'product-2'}>Color: {color}</p>
                            <p key={'product-3'}>Talla: {size}</p>
                            {/* <p key={'product-4'}>Cantidad: {quantity}</p> */}
                            <Label type={'number'} name={'quantity'} text={'Cantidad:'} valueInput={quantity} setValue={setProductQuantity} clase={'productQuantity'}/>
                            <p key={'product-5'}>Total: {total}</p>
                        </>
                    )
                });
    
            setFields(mappedProduct);
            handleProductChange();
            
        } else if(!productDescription && title === 'Escoge tu método de envío preferido') {
            const mappedOptions = description.map (object => {
                const {first, second} = object; 
                    return (
                        <>
                            <Label type={'checkbox'} name={'isDelivery'} text={first} valueInput={true} clase={'checkbox'}/>
                            <Label type={'checkbox'} name={'noDelivery'} text={second} valueInput={false} clase={'checkbox'}/>
                        </>
                    )
                });

            setFields(mappedOptions);

        }else {
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

    }, [productQuantity]);


    return (
        <div className='description-field'>
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