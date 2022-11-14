import React, {useState, useEffect} from 'react'
import Form from '../../Form/Form';

const ThirdStep = ({onLoad}) => {
  /* El objeto product y delivery serán obetenidos desde la api */
  const [product, setProduct] = useState({product: 'vestido', color: 'Azul', size: 'XS', quantity: '1', total: 'US$ 25.00'})
  const [delivery, setDelivery] = useState({addresee: 'fulanito', date: '24/11/2022', location: 'UCA'});

  useEffect(() => {
    onLoad(3);
  }, [])

  const descriptionFields = [{
    'key': '1',
    'element': 'product-description',
    'title': '¡Tu reserva se ha registrado correctamente!',
    'description': [product]
  }, {
    'key': '2',
    'element': 'delivery-description',
    'title': 'Descripción de envío',
    'description': [delivery]
  }]

  return (
    <Form title={'Método de envío y reserva'} formType={'description'} formFields={descriptionFields} justContinue={true}  continuePath={'/feed'} continueText={'Continuar'}/>
  )
}

export default ThirdStep