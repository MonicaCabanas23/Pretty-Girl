import React from 'react'
import './ProductCardBag.scss'

const ProductCard = ({image, name, price, onClickHandler, id}) => {

  return (
    <article className={id+" product-card"}>
        <figure>
            <img src={image} alt=""/>
        </figure>
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
    </article>
  )
}

export default ProductCard