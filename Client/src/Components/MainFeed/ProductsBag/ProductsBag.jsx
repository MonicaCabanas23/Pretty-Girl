import React, { useState, useEffect, Suspense } from 'react'
import './ProductsBag.scss'

import ProductCardBag from './ProductCardBag/ProductCardBag'

const ProductsBag = ({ title, bag = false, products }) => {
    return (
        <>
            {title ? <h1 className="title">{title}</h1> : <></>}
            <div className="cards">
                {
                    products.map((item, index) => {
                        return (
                            <ProductCardBag key={index} image={item.picture} name={item.name} price={item.price} />
                        )
                    })
                }
            </div>
        </ >
    )
}

export default ProductsBag