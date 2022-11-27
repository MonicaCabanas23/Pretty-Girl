import React, { useState, useEffect, useContext } from 'react'
import Form from '../../Form/Form';
import ProductCardBooking from '../ProductCardBooking/ProductCardBooking';

const SecondStep = ({ onLoad }) => {
  const [Products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);
  const [total, setTotal] = useState(0);

  let SubTotal = 0;

  useEffect(() => {
    if (SubTotal > 0) setTotal(SubTotal);
  }, [SubTotal])
  
  useEffect(() => {
    if (!localStorage.getItem("products")) navigate('/feed')
  }, [localStorage.getItem("products")])

  useEffect(() => {
    console.log(Products)
    onLoad(2);
  }, [])

  /* Los campos del objeto deben de ser obtenidos de la api */
  const descriptionFields = [{
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
      SubTotal+= parseInt(item.amount) * parseInt(item.price);
      return (
        <ProductCardBooking key={index} item={item} id={'reserva'} />
      )
    }),
  },
  {
    'key': '3',
    'element': 'label',
    'text': 'Escoge tu método de envío preferido',
    'use': false,
    'clase': 'Description-delivery'
  }]
  console.log(total);
  return (
    <Form title={'Método de envío y reserva'} formType={'description'} formFields={descriptionFields} justContinue={false} cancelPath={'../client-data'} cancelText={'Volver'} continuePath={'../confirmation'} continueText={'Continuar'} />
  )
}

export default SecondStep