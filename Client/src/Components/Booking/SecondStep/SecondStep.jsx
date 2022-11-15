import React, {useState, useEffect} from 'react'
import Form from '../../Form/Form';

const SecondStep = ({onLoad}) => {
  /* El objeto product y delivery serán obetenidos desde la api */
  const [product, setProduct] = useState({product: 'vestido', color: 'Azul', size: 'XS', quantity: '1', total: 'US$ 25.00'})
  const [delivery, setDelivery] = useState({addresee: 'fulanito', date: '24/11/2022', location: 'UCA'});

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
    'description': [delivery]
  }, [product, delivery]]

  return (
    <>
    <Form title={'Método de envío y reserva'} formType={'description'} formFields={descriptionFields} justContinue={false} cancelPath={'feed/booking/client-data'} cancelText={'Volver'} continuePath={'../confirmation'} continueText={'Continuar'}/>
    </>
  )
}

export default SecondStep