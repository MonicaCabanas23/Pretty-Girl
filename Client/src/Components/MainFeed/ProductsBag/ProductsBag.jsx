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
                            <ProductCardBag key={index} product={item} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ProductsBag