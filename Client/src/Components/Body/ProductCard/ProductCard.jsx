import React from 'react'
import './ProductCard.scss'

const ProductCard = () => {
  return (
    <article className="product-card">
        <figure>
            <img src="./assets/img/product.jpg" alt=""/>
        </figure>
        <p className="product-name">Cartera Christian Dior</p>
        <p className="product-price">$30.00</p>
    </article>
  )
}

export default ProductCard