import React, { useState, useEffect, useContext } from 'react'
import Form from '../../Form/Form';
import ProductCard from '../../MainFeed/ProductsContainer/ProductCard/ProductCard';

const SecondStep = ({ onLoad }) => {
  const [Products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);
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
      /* La ruta a la que redirigirá cada producto es ProductDescription */
      return (
        <ProductCard key={index} image={item.picture.secure_url} name={item.name} price={item.price} />
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

  return (
    <>
      <Form title={'Método de envío y reserva'} formType={'description'} formFields={descriptionFields} justContinue={false} cancelPath={'../client-data'} cancelText={'Volver'} continuePath={'../confirmation'} continueText={'Continuar'} />
    </>
  )
}

export default SecondStep