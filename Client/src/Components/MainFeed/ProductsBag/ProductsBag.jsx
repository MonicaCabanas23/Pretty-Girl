import React, { useState, useEffect, Suspense } from 'react'
import './ProductsBag.scss'

import ProductCardBag from './ProductCardBag/ProductCardBag'

const ProductsBag = ({ bag = false, products, onClick }) => {
    return (
        <>
            <div className="cards">
                {
                    products.map((item, index) => {
                        if (index > 0) {
                            return <ProductCardBag key={index} product={item} />
                        }
                    })
                }
            </div>
        </>
    )
}

export default ProductsBag