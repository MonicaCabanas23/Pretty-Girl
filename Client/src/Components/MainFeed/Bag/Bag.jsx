import React from 'react'
import ProductsContainer from '../ProductsContainer/ProductsContainer'
import Button from '../../Button/Button'

const Bag = () => {
  return (
    <section>
        <ProductsContainer />
        <Button clase={reserve} text={'Reservar'}/>
    </section>
  )
}

export default Bag