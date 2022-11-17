import React, {useState, useEffect} from 'react';   
import './Description.scss';
import Label from '../Label/Label';
import ProductContext, {useProductContext} from '../../../Contexts/ProductContext';

const Description = ({title, productDescription}) => {
    const context = useProductContext();
    const [fields, setFields] = useState([]);
    const [productQuantity, setProductQuantity] = useState(1);

    useEffect( () => {
        const strPrice = context.product.total;
        const price = parseInt(strPrice.substring(4));

        const handleQuantityChange = () => {
            if(productDescription) {
                const {product, color, size, quantity, total} = context.product;
                const mappedProduct = [
                    <ProductContext.Consumer>
                        { () => { 
                            return(
                                <>
                                    <p key={'product-1'}>Producto: {product}</p>
                                    <p key={'product-2'}>Color: {color}</p>
                                    <p key={'product-3'}>Talla: {size}</p>
                                    <Label type={'number'} name={'quantity'} text={'Cantidad:'} valueInput={productQuantity} setValue={setProductQuantity} clase={'productQuantity'}/>
                                    <p key={'product-5'}>Total: {total}</p>
                                </>
                            )
                        }
                        }
                    </ProductContext.Consumer>
                ];

                context.product.quantity = productQuantity 
                context.product.total = `US$ ${productQuantity*price}`
                setFields(mappedProduct);
            }
        }

        handleQuantityChange();
    },[productQuantity]);

    useEffect(() => {

        if(productDescription) {
            const {product, color, size, quantity, total} = context.product;
            const mappedProduct = [
                <ProductContext.Consumer>
                    { (value) => { 
                        return(
                            <>
                                <p key={'product-1'}>Producto: {product}</p>
                                <p key={'product-2'}>Color: {color}</p>
                                <p key={'product-3'}>Talla: {size}</p>
                                <Label type={'number'} name={'quantity'} text={'Cantidad:'} valueInput={productQuantity} setValue={setProductQuantity} clase={'productQuantity'}/>
                                <p key={'product-5'}>Total: {total}</p>
                            </>
                        )
                    }
                    }
                </ProductContext.Consumer>
            ];
    
            setFields(mappedProduct);
            
        } /* else if(!productDescription && title === 'Escoge tu método de envío preferido') {
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
        } */

    }, []);


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