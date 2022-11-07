import React from 'react'
import './ProductsContainer.scss'
import DecorativeLines from '../DecorativeLines/DecorativeLines'
import ProductCard from './ProductCard/ProductCard'

const ProductsContainer = () => {
  return (
    <section className="recommended-products">
        <DecorativeLines />
        <h1 className="title">Recomendados para ti</h1>
        <div className="cards">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </section>
  )
}

export default ProductsContainer