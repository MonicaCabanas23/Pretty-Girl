import React from 'react'
import './Bag.scss'
import ProductsContainer from '../ProductsContainer/ProductsContainer'
import Button from '../../Button/Button'

const Bag = () => {
  return (
    <section className='bag-container'>
        <ProductsContainer bag={true}/>
        <Button clase={'reserve'} text={'Reservar'}/>
    </section>
  )
}

export default Bag