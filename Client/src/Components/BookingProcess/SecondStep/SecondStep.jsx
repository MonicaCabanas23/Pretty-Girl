import React, {useEffect} from 'react'
import Form from '../../Form/Form';

const SecondStep = ({onLoad}) => {
  /* Aquí hace falta agregar las variables del producto y el delivery que se obtendran desde la api */

  useEffect(() => {
    onLoad(2);
  }, [])

  /* Los campos del objeto deben de ser obtenidos de la api */
  const descriptionFields = [{
    'key': '1',
    'element': 'product-description',
    'title': 'Descripción de reserva',
    'description': [{'product': 'Vestido color azul con mangas', 
      'color': 'Azul', 
      'size': 'XS', 
      'quantity': '1', 
      'total': 'US$ 25.00'}]
  }, {
    'key': '2',
    'element': 'delivery-description',
    'title': 'Escoge tu método de envío preferido',
    'description': [{'addresee': 'fulanito', 
      'date': '24/11/2022', 
      'location': 'UCA'}]
  }]

  return (
    <Form title={'Método de envío y reserva'} formType={'description'} formFields={descriptionFields} justContinue={false} cancelPath={'./../booking/client-data'} cancelText={'Volver'} continuePath={'/../booking/confirmation'} continueText={'Continuar'}/>
  )
}

export default SecondStep