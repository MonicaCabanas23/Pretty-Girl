import React from 'react'
import './Feed.scss';
import DecorativeLines from './../../Components/Body/DecorativeLines/DecorativeLines'
import ProductCard from './../../Components/Body/ProductCard/ProductCard'

const Feed = () => {
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
  );
};

export default Feed