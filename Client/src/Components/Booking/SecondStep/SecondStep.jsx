import React, {useState, useEffect, useContext} from 'react'
import { ProductContext } from '../../../Pages/Feed/Feed';
import Form from '../../Form/Form';

const SecondStep = ({onLoad}) => {
  /* El objeto product y delivery serán obetenidos desde la api */
  const {product, setProduct} = useContext(ProductContext); 
  /* const [delivery, setDelivery] = useState(); */

  useEffect(() => {
    onLoad(2);
  }, [])

  /* Los campos del objeto deben de ser obtenidos de la api */
  const descriptionFields = [{
    'key': '1',
    'element': 'product-description',
    'title': 'Descripción de reserva',
    'description': [product]
  }, {
    'key': '2',
    'element': 'delivery-description',
    'title': 'Escoge tu método de envío preferido',
    'description': [{first: 'Envío a domicilio', second: 'Recoger en local'}]
  }]

  return (
    <>
    <Form title={'Método de envío y reserva'} formType={'description'} formFields={descriptionFields} setObject={setProduct} justContinue={false} cancelPath={'../client-data'} cancelText={'Volver'} continuePath={'../confirmation'} continueText={'Continuar'}/>
    </>
  )
}

export default SecondStep