import React, { useState, useEffect, useContext } from 'react'
import Form from '../../Form/Form';
import ProductCardBooking from '../ProductCardBooking/ProductCardBooking';
import Loading from '../../Loading/Loading';

const SecondStep = ({ onLoad }) => {
  const [Products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);
  const [total, setTotal] = useState(0);
  const [descriptionFields, setDescriptionFields] = useState([]);
  const [loading, setLoading] = useState(true);

  let SubTotal = 0;

  useEffect(() => {
    if (SubTotal > 0) {
      setTotal(SubTotal);
    }
  }, [SubTotal])

  useEffect(() => {
    if (!localStorage.getItem("products")) navigate('/feed')
  }, [localStorage.getItem("products")])

  useEffect(() => {
    setLoading(true)
    onLoad(2);

    const Fields = [{
      'key': '1',
      'element': 'label',
      'text': 'Descripción de reserva',
      'use': false,
      'clase': 'Description-reserva'
    },
    {
      'key': '2',
      'element': 'react',
      'text': Products.map((item, index) => {
        SubTotal += parseInt(item.amount) * parseInt(item.price);
        return (
          <ProductCardBooking key={index} item={item} id={'reserva'} />
        )
      }),
    }, {
      'key': '3',
      'element': 'label',
      'text': 'Su total es: $' + total,
      'use': false,
      'clase': 'Description-total'
    },
    {
      'key': '4',
      'element': 'label',
      'text': 'Escoge tu método de envío preferido',
      'use': false,
      'clase': 'Description-delivery'
    }]
    setDescriptionFields(Fields);
  }, [total]);

  useEffect(() => {
    if (descriptionFields.length > 0) {
      console.log(total);
      setLoading(false)
    }
  }, [descriptionFields])

  /* Los campos del objeto deben de ser obtenidos de la api */

  return (
    <>
      {loading ? <Loading /> : <Form title={'Método de envío y reserva'} formType={'description'} formFields={descriptionFields} justContinue={false} cancelPath={'../client-data'} cancelText={'Volver'} continuePath={'../confirmation'} continueText={'Continuar'} />}
    </>
  )
}

export default SecondStep