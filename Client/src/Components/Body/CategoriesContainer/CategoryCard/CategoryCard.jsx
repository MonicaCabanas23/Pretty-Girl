import React, {useState} from 'react'
import './CategoryCard.scss'

const CategoryCard = ({image, name}) => {
  return (
    <article className="category-card">
        <figure>
            <img src={image} alt=""/>
            
            <div className="hover-container">
              <div className="hover">
              <p>{name}</p>
              </div>
          </div>
        </figure>
    </article>
  )
}

export default CategoryCard