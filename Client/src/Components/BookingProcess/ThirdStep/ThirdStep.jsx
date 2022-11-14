import React, {useEffect} from 'react'
import Form from '../../Form/Form';

const ThirdStep = ({onLoad}) => {
  useEffect(() => {
    onLoad(3);
  }, [])

  const descriptionFields = [{
    'key': '1',
    'element': 'product-description',
    'title': '¡Tu reserva se ha registrado correctamente!',
    'description': [{'product': 'Vestido color azul con mangas', 
      'color': 'Azul', 
      'size': 'XS', 
      'quantity': '1', 
      'total': 'US$ 25.00'}]
  }, {
    'key': '2',
    'element': 'delivery-description',
    'title': 'Descripción de envío',
    'description': [{'addresee': 'fulanito', 
      'date': '24/11/2022', 
      'location': 'UCA'}]
  }]

  return (
    <Form title={'Método de envío y reserva'} formType={'description'} formFields={descriptionFields} justContinue={true}  continuePath={'/feed'} continueText={'Continuar'}/>
  )
}

export default ThirdStep