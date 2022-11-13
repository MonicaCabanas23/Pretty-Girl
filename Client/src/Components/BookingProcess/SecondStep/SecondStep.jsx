import React, {useEffect} from 'react'
import Form from '../../Form/Form';

const SecondStep = ({onLoad}) => {
  useEffect(() => {
    onLoad(2);
  }, [])

  /* Los campos del objeto deben de ser obtenidos de la api */
  const descriptionFields = [{
    'key': '1',
    'title': 'Descripción de reserva',
    'object': {
      'Producto': 'Vestido color azul con mangas',
      'Color': 'Azul',
      'Talla': 'XS',
      'Cantidad': '1',
      'Total a pagar': 'US$ 25.00'
    }
  }, {
    'key':'2',
    'title': 'Escoge tu método de envío preferido',
    'object': {
      'Producto': 'Vestido color azul con mangas',
      'Color': 'Azul',
      'Talla': 'XS',
      'Cantidad': '1',
      'Total a pagar': 'US$ 25.00'
    }
  }]

  return (
    <Form title={'Método de envío y reserva'} formType={'description'} descriptionFields={descriptionFields} justContinue={false} cancelPath={'/../booking/client-data'} continuePath={'/../booking/confirmation'}/>
  )
}

export default SecondStep