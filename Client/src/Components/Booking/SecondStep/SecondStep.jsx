import React, {useState, useEffect, useContext} from 'react'
import Form from '../../Form/Form';

const SecondStep = ({onLoad}) => {

  useEffect(() => {
    onLoad(2);
  }, [])

  /* Los campos del objeto deben de ser obtenidos de la api */
  const descriptionFields = [{
    'key': '1',
    'element': 'product-description',
    'title': 'Descripción de reserva',
  }, {
    'key': '2',
    'element': 'delivery-description',
    'title': 'Escoge tu método de envío preferido',
  }]

  return (
    <>
    <Form title={'Método de envío y reserva'} formType={'description'} formFields={descriptionFields} justContinue={false} cancelPath={'../client-data'} cancelText={'Volver'} continuePath={'../confirmation'} continueText={'Continuar'}/>
    </>
  )
}

export default SecondStep