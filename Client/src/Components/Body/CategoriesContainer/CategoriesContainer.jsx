import React from 'react'
import './CategoriesContainer.scss'
import DecorativeLines from '../../DecorativeLines/DecorativeLines'
import CategoryCard from './CategoryCard/CategoryCard'

const CategoriesContainer = () => {
  return (
    <section className="categoriesContainer">
        <DecorativeLines />
        <h1 className="title">Explora nuestros productos</h1>
        <div className="categoryCards">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
    </section>
  )
}

export default CategoriesContainer